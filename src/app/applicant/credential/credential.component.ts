import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription, take } from 'rxjs';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.css'],
  providers: [MessageService]
})
export class CredentialComponent implements OnInit {

  subscription!: Subscription;

  uploadedFiles!: File;
  maxFileSize: number = 100000;

  constructor(
    private messageService: MessageService,
    private profileService: ProfileService,
    private router: Router
    ) {}

  ngOnInit(): void {
    
  }

  onUpload(event: any) {
      for(let file of event.files) {
          this.upload(file);
      }
      this.messages('upload file', 'success', 'Success', '');
  }

  upload(file: any){
    this.profileService.uploadCv(file).pipe(take(1)).subscribe((data: any) => {
      if (data.status < 300 ) {
        this.messages('upload cv', 'success', 'Success', '/profile/details');
      } else {
        this.messages(data.message, 'warn', 'Warn', '/profile/details');
      }
    })
    
  }

  messages(info: string, severity: string, summary: string, url: string) {
    this.messageService.add({
      key: 'notif',
      severity: severity,
      summary: summary,
      detail: info,
      life: 3000
    });
    setTimeout(() => {
      this.router.navigateByUrl(`${url}`);
    }, 1300);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
