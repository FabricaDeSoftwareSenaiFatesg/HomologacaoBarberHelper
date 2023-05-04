import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { SafeUrlPipe } from './pipe/safe-url.pipe';
import { ImagemPreviewComponent } from './component/imagem-preview.component';

@NgModule({
  declarations: [
    SafeUrlPipe,
    ImagemPreviewComponent
  ],
  imports: [
    CommonModule,
    InputMaskModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    InputSwitchModule,
    TableModule,
    TieredMenuModule,
    DialogModule,
    InputNumberModule
  ],
  exports: [
    InputMaskModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    InputSwitchModule,
    TableModule,
    TieredMenuModule,
    DialogModule,
    InputNumberModule,
    SafeUrlPipe,
    ImagemPreviewComponent
  ],
  providers: [
    SafeUrlPipe
  ]
})
export class ArquiteturaModule { }
