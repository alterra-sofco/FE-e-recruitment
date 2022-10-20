import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//form
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//primeNg
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
//card
import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import { ImageModule } from 'primeng/image';
//seacrh
import { InputTextModule } from 'primeng/inputtext';
//listbox
import { ListboxModule } from 'primeng/listbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    //primeNg
    StepsModule,
    ToastModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ImageModule,
    ListboxModule,
    
    //reactive 
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BrowserAnimationsModule,

    //primeNg
    StepsModule,
    ToastModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ImageModule,
    ListboxModule,

    //reactive 
    ReactiveFormsModule,
    FormsModule
  ],
  //service in here
  providers: [],
})
export class SharedModule { }
