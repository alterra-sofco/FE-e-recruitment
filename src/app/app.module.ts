import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

//component
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';

//module shared by
import {JobModule} from './job/job.module';
import {FooterComponent} from './core/footer/footer.component';
import {SharedModule} from 'primeng/api';
import {ApplicantModule} from './applicant/applicant.module';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from './auth/auth.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpIntercepInterceptor} from './shared/interceptor/http-intercep.interceptor';

// registerLocaleData(localeId, 'id');
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
    AuthModule,
    SharedModule,

    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    // {provide: localeId, useValue: "id-ID"},
    // {provide: MessageService},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
