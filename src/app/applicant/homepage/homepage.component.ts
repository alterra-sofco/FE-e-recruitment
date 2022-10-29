import {Component, OnInit, ViewChild} from '@angular/core';
import {LazyLoadEvent, MessageService, PrimeNGConfig} from 'primeng/api';
import {Subject, take, takeUntil} from 'rxjs';
import {Applicant} from 'src/app/shared/models/applicant';
import {Job, MasterDataModel} from 'src/app/shared/models/job';
import {Skill} from 'src/app/shared/models/skill';
import {JobService} from 'src/app/shared/services/job.service';
import {ProfileService} from 'src/app/shared/services/profile.service';
import {SkillService} from 'src/app/shared/services/skill.service';
import {DialogService} from "primeng/dynamicdialog";
import {CardJob2Component} from "../../shared/components/card-job2/card-job2.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [DialogService, MessageService]
})
export class HomepageComponent implements OnInit {

  @ViewChild("dt") dt!: any;
  search: string = '';
  applicant!: Applicant;

  //filter
  selectedSkill!: Skill;
  skill: Skill[] = [];

  //job
  selectedJob!: any;
  job: Job[] = [];
  jobList: Job[] = [];
  jobDetail: any;

  first?: number = 0;
  rows?: number = 10;
  globalFilter: any;

  private unsubcribe$ = new Subject();
  totalRecords!: number | 0;
  isLoading: boolean = false;

  displayMaximizable!: boolean;

  constructor(
    private primengConfig: PrimeNGConfig,
    private profileService: ProfileService,
    private jobService: JobService,
    private dialogService: DialogService
  ) {
    this.primengConfig.ripple = true;
  }

  ngOnInit() {


    //user
    this.profileService.getProfile().pipe(take(1)).subscribe((data: any) => {
      this.applicant = data.data;
    })
    this.getData();

    //skill


    //skill filter


  }


  getData() {
    this.isLoading = true;
    setTimeout(() => {
      this.jobService.getAllJob(this.first!, this.rows, this.globalFilter).pipe(takeUntil(this.unsubcribe$)).subscribe((res: MasterDataModel) => {
          this.jobList = res.data;
          this.totalRecords = res.totalData;
          this.isLoading = false;
        }, ((err: Error) => {
          this.jobList = [];
          this.totalRecords = 0;
          console.log(err);
          this.isLoading = false;
        })
      );
    }, 1000);
  }

  loadDataLazy(event: LazyLoadEvent): LazyLoadEvent {
    this.first = event.first;
    this.rows = event.rows;
    this.globalFilter = event.globalFilter;
    this.getData();
    return event;
  }

  searchData(event: any) {
    const res = (event.target as HTMLInputElement)?.value
    this.globalFilter = res;
    this.getData();
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  viewDetail(job: Job) {
    this.jobService.getJobDetail(job.jobPostingId).pipe(take(1)).subscribe(data => {
      this.jobService.jobDetail = data.data;
      this.dialogService.open(CardJob2Component, {
        header: 'Info detail',
        width: '40%',
        contentStyle: {"overflow": "auto"},
        baseZIndex: 10000,
        maximizable: true
      });
    })

  }

}


