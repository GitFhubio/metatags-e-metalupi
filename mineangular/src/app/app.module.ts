import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UformComponent } from './uform/uform.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component'; //questo deve essere importato anche qui
import { JwtModule } from '@auth0/angular-jwt';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

export function tokenGetter(): any {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    UformComponent,
    AdminListComponent,
    HomeAdminComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule, //vitafounder way
    FormsModule,
    JwtModule.forRoot({
      config: {
      tokenGetter: (tokenGetter),
      allowedDomains: ['localhost:4200'],
      disallowedRoutes: ['localhost:4200/admin/']
      }
      })
  ],
  providers: [{provide : LOCALE_ID,useValue:'it'},{provide: DEFAULT_CURRENCY_CODE,useValue:'EUR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
