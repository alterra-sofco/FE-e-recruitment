import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//component
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';

//module shared by
import { JobModule } from './job/job.module';
import { FooterComponent } from './core/footer/footer.component';
import { SharedModule } from 'primeng/api';
import { ApplicantModule } from './applicant/applicant.module';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //module here
    JobModule,
    ApplicantModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
