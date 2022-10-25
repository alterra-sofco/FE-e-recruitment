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
import { AuthenticationService } from './services/authentication.service';
import { SkillService } from './services/skill.service';
import { EducationService } from './services/education.service';
import { ExperienceService } from './services/experience.service';
import { FileService } from './services/file.service';
import { ProfileService } from './services/profile.service';


@NgModule({
  declarations: [
    StepHomepageComponent,
    CardJobComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    //primeNg
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

    //reactive 
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BrowserAnimationsModule,

    //primeNg
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

    //reactive 
    ReactiveFormsModule,
    FormsModule,

    //components
    StepHomepageComponent,
    CardJobComponent,
  ],
  //service in here
  providers: [
    AuthenticationService,
    SkillService,
    EducationService,
    ExperienceService,
    FileService,
    ProfileService
  ],
})
export class SharedModule { }
