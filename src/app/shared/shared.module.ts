import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {DropdownModule} from 'primeng/dropdown';
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
import { StepHomepageComponent } from './step-homepage/step-homepage.component';
//calender
import { CalendarModule } from 'primeng/calendar';




@NgModule({
  declarations: [
    StepHomepageComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    //primeNg
    DropdownModule,
    OverlayPanelModule,
    FieldsetModule,
    MultiSelectModule,
    FileUploadModule,
    HttpClientModule,
    RippleModule,
    StyleClassModule,
    StepsModule,
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
    DropdownModule,
    OverlayPanelModule,
    FieldsetModule,
    MultiSelectModule,
    FileUploadModule,
    HttpClientModule,
    RippleModule,
    StyleClassModule,
    StepsModule,
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
    StepHomepageComponent,
  ],
  //service in here
  providers: [],
})
export class SharedModule { }
