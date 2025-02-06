import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificadosRoutingModule } from './certificados-routing.module';
import { CertificadosComponent } from './certificados.component';


@NgModule({
  declarations: [
    CertificadosComponent
  ],
  imports: [
    CommonModule,
    CertificadosRoutingModule
  ]
})
export class CertificadosModule { }
