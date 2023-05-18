import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquiteturaModule } from 'src/app/arquitetura/arquitetura.module';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ArquiteturaModule,
    MenuModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
