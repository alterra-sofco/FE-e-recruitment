import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StepHomepageComponent } from './components/step-homepage/step-homepage.component';
import { CardJobComponent } from './components/card-job/card-job.component';

//form
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//primeNg
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { FieldsetModule } from 'primeng/fieldset';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
//card
import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import { ImageModule } from 'primeng/image';
//seacrh
import { InputTextModule } from 'primeng/inputtext';
//listbox
import { ListboxModule } from 'primeng/listbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//overlay
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
//calender
import { CalendarModule } from 'primeng/calendar';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { AuthenticationService } from './services/authentication.service';
import { SkillService } from './services/skill.service';
import { EducationService } from './services/education.service';
import { ExperienceService } from './services/experience.service';
import { FileService } from './services/file.service';
import { ProfileService } from './services/profile.service';
import { SessionService } from './services/session.service';
import { HttpIntercepInterceptor } from './interceptor/http-intercep.interceptor';
import { AuthGuard } from './auth.guard';
import { NewsComponent } from './components/news/news.component';
import {DataViewModule} from 'primeng/dataview';

@NgModule({
  declarations: [
    StepHomepageComponent,
    CardJobComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    //primeNg
    DataViewModule,
    MessagesModule,
    MessageModule,
    AvatarModule,
    AvatarGroupModule,
    StepsModule,
    DropdownModule,
    OverlayPanelModule,
    FieldsetModule,
    MultiSelectModule,
    FileUploadModule,
    HttpClientModule,
    RippleModule,
    StyleClassModule,
    ToastModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ImageModule,
    ListboxModule,
    MenubarModule,
    DynamicDialogModule,
    DialogModule,
    DividerModule,
    TagModule,
    CalendarModule,
    FileUploadModule,
    ScrollPanelModule,

    //reactive 
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [
    BrowserAnimationsModule,

    //primeNg
    DataViewModule,
    MessagesModule,
    MessageModule,
    AvatarModule,
    AvatarGroupModule,
    StepsModule,
    DropdownModule,
    OverlayPanelModule,
    FieldsetModule,
    MultiSelectModule,
    FileUploadModule,
    HttpClientModule,
    RippleModule,
    StyleClassModule,
    ToastModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ImageModule,
    ListboxModule,
    MenubarModule,
    DynamicDialogModule,
    DialogModule,
    DividerModule,
    TagModule,
    CalendarModule,
    FileUploadModule,
    ScrollPanelModule,

    //reactive 
    ReactiveFormsModule,
    FormsModule,

    //components
    StepHomepageComponent,
    CardJobComponent,
    NewsComponent
  ],
  //service in here
  providers: [
    AuthenticationService,
    SkillService,
    EducationService,
    ExperienceService,
    FileService,
    ProfileService,
    SessionService,
    HttpIntercepInterceptor,
    AuthGuard,
  ],
})
export class SharedModule { }
