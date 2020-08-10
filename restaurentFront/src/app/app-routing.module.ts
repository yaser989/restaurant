import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './companents/home/home.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { SpecialiteCuisineComponent } from './components/specialite-cuisine/specialite-cuisine.component';

const routes: Routes = [
  {path:'home', component : HomeComponent},
  {path:'specialite', component : SpecialiteComponent},
  {path:'specialite/:specialite', component : SpecialiteCuisineComponent},
  {path : '', redirectTo:'/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
