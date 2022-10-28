import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from "primeng/toast";

@NgModule({
  declarations: [
    // HeaderComponent,
    // FooterComponent
    // StepHomepageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ToastModule
  ],
  exports: [

  ]
})
export class CoreModule { }
