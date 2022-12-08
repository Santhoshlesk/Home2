import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComsoonComponent } from './comsoon/comsoon.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'project',
    component:ProjectComponent
  },
  {
    path:'comsoon',
    component:ComsoonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
