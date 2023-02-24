import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Para utilizar rutas
import { RouterModule } from '@angular/router';

// Modulos Personalizados
import { SharedModule } from '../shared/shared.module';

// Componentes de Pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
