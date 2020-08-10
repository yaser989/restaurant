import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './companents/home/home.component';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { SpecialiteCuisineComponent } from './components/specialite-cuisine/specialite-cuisine.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpecialiteComponent,
    SpecialiteCuisineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
