import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.css']
})
export class CredentialComponent implements OnInit {

  uploadedFiles!: File;
  maxFileSize: number = 100000;

  constructor(
    private messageService: MessageService,
    private profileService: ProfileService,
    ) {}

  ngOnInit(): void {
    
  }

  onUpload(event: any) {
      for(let file of event.files) {
          this.upload(file);
      }
      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  upload(file: any){
    this.profileService.uploadCv(file).pipe(take(1)).subscribe(data=>{
      alert("upload");
    })
  }

}
