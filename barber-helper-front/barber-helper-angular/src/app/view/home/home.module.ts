import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquiteturaModule } from 'src/app/arquitetura/arquitetura.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ArquiteturaModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
