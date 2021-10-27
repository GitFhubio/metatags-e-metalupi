import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { UformComponent } from './uform/uform.component'; //questo deve essere importato anche qui
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    UformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide : LOCALE_ID,useValue:'it'},{provide: DEFAULT_CURRENCY_CODE,useValue:'EUR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
