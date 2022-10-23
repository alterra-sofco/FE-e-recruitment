import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//form
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//primeNg
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { StyleClassModule} from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import {MenubarModule} from 'primeng/menubar';
import {DividerModule} from 'primeng/divider';
import { TagModule } from 'primeng/tag';
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
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { StepHomepageComponent } from './step-homepage/step-homepage.component';



@NgModule({
  declarations: [
    StepHomepageComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  
    //primeNg
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
    
    //reactive 
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BrowserAnimationsModule,

    //primeNg
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

    //reactive 
    ReactiveFormsModule,
    FormsModule,
    StepHomepageComponent,
  ],
  //service in here
  providers: [],
})
export class SharedModule { }
