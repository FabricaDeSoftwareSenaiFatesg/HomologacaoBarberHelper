import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";

const routes: Route[] = [

    { path: 'home', component: HomeComponent },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class HomeRoute {}
