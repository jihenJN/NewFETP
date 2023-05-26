import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { ChartComponent } from './chart/chart.component';
import { MatTabsModule } from '@angular/material/tabs';

import * as CanvasJSAngularChart from 'src/assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    ChartComponent,
    CanvasJSChart
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    MatTabsModule
  ],
  exports: [
    ChartComponent
  ]
})
export class StatisticsModule { }
