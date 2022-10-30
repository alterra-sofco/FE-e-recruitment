import {Component, OnInit, ViewChild} from '@angular/core';
import {LazyLoadEvent, PrimeNGConfig} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';
import {Applicant} from 'src/app/shared/models/applicant';
import {Job, MasterDataModel} from 'src/app/shared/models/job';
import {JobService} from 'src/app/shared/services/job.service';
import {} from 'src/app/shared/services/profile.service';
import {DialogService} from "primeng/dynamicdialog";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [DialogService]
})
export class HomepageComponent implements OnInit {

  @ViewChild("dt") dt!: any;

  //incoming
  first?: number = 0;
  rows?: number = 10;
  globalFilter: any;

  private unsubcribe$ = new Subject();
  totalRecords!: number | 0;
  isLoading: boolean = false;

  //main
  search: string = '';
  applicant!: Applicant;

  jobList: Job[] = [];
  filteredJob: Job[] = [];
  jobCounter!: number;
  jobDetail: any;

  displayMaximizable!: boolean;

  constructor(
    private primengConfig: PrimeNGConfig,
    private jobService: JobService,
  ) {
    this.primengConfig.ripple = true;
  }

  ngOnInit() {
    this.getData();
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  getData() {
    this.isLoading = true;
    setTimeout(() => {
      this.jobService.getAllJobFilter(this.first,this.rows,this.globalFilter)
      .pipe(takeUntil(this.unsubcribe$)).subscribe((res: MasterDataModel) => {
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

}


