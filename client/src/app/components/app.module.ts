import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {TestComponentComponent} from './test-component/test-component.component';
import {ApiRequestsService} from '../services/api-requests.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ConfigurationService} from '../services/configuration.service';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {routing} from "./app.routing";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from "../auth/auth.guard";
import {AuthInterceptor} from "../auth/auth-interceptor.service";
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    routing,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    RouterModule,
    ApiRequestsService,
    ConfigurationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
