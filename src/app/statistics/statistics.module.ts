import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ],
  exports: [
    ChartComponent
  ]
})
export class StatisticsModule { }
