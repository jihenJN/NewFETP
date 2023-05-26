import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  columnChartOptions = {
    animationEnabled: true,
    title: {
      text: 'Products Sales',
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: 'column',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
          { label: 'anans', y: 35 },
          { label: 'melon', y: 25 },
          { label: 'kiwi', y: 25 },
          { label: 'dragon', y: 30 },
          { label: 'peach', y: 28 },
          
        ],
      },
    ],
  };

  pieChartOptions = {
    animationEnabled: true,
    title: {
      text: 'Products Sales',
    },
    theme: 'light1', // "light1", "dark1", "dark2"
    data: [
      {
        type: 'pie',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
          { label: 'anans', y: 35 },
          { label: 'melon', y: 25 },
          { label: 'kiwi', y: 25 },
          { label: 'dragon', y: 30 },
          { label: 'peach', y: 28 },
          
        ],
      },
    ],
  };

  lineChartOptions = {
    animationEnabled: true,
    title: {
      text: 'Products Sales',
    },
    theme: 'light1', // "light1", "dark1", "dark2"
    data: [
      {
        type: 'line',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 },
          { label: 'anans', y: 35 },
          { label: 'melon', y: 25 },
          { label: 'kiwi', y: 25 },
          { label: 'dragon', y: 30 },
          { label: 'peach', y: 28 },
          
        ],
      },
    ],
  };
}
