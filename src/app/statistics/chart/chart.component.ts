import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public countSent = 0;
  public countReceived = 0;
  public countPaid = 0;
  public countOverdue = 0;

   // Initialize the chart options with initial data
   public columnChartOptions = this.createColumnChartOptions();
   public pieChartOptions = this.createPieChartOptions();
   public lineChartOptions= this.createLineChartOptions();


  constructor(protected invoiceService: InvoiceService) { }

  /*ngOnInit(): void {
    this.invoiceService.getCountStatusSent().subscribe(a => {
      console.log("value of Sent", a)
      this.countSent = a;
    });

    this.invoiceService.getCountStatusReceived().subscribe(a => {
      console.log("value of Received", a)
      this.countReceived = a;
    });

    this.invoiceService.getCountStatusPaid().subscribe(a => {
      console.log("value of paid", a)
      this.countPaid = a;
    });

    this.invoiceService.getCountStatusOverdue().subscribe(a => {
      console.log("value of Overdue", a)
      this.countOverdue = a;
    });

  }*/




  ngOnInit(): void {
    forkJoin([
      this.invoiceService.getCountStatusSent(),
      this.invoiceService.getCountStatusReceived(),
      this.invoiceService.getCountStatusPaid(),
      this.invoiceService.getCountStatusOverdue()
    ]).subscribe(([sent, received, paid, overdue]) => {
      console.log("value of Sent", sent);
      console.log("value of Received", received);
      console.log("value of paid", paid);
      console.log("value of Overdue", overdue);

      // Set the component properties with the obtained values
      this.countSent = sent;
      this.countReceived = received;
      this.countPaid = paid;
      this.countOverdue = overdue;
        
      // Now, update the chart options with the latest data
      this.columnChartOptions = this.createColumnChartOptions();
      this.pieChartOptions=this.createPieChartOptions();
      this.lineChartOptions=this.createLineChartOptions();
    
      
    });
  }

  createColumnChartOptions() {
    return {
      animationEnabled: true,
      title: {
        text: 'Invoices Status',
      },
      data: [
        {
          type: 'column',
          dataPoints: [
            { label: 'SENT', y: this.countSent , color: '#3b86d1'},
            { label: 'RECEIVED', y: this.countReceived,color: '#f39915' },
            { label: 'PAID', y: this.countPaid ,color: '#21bf06'},
            { label: 'OVERDUE', y: this.countOverdue,color: '#dc3545'},
          ],
        },
      ],
    };
  }


  createPieChartOptions() {
    return{
      animationEnabled: true,
      title: {
        text: 'Invoices Status',
      },
      theme: 'light1', // "light1", "dark1", "dark2"
      data: [
        {
          type: 'pie',
          dataPoints: [
            { label: 'SENT', y: this.countSent , color: '#3b86d1'},
            { label: 'RECEIVED', y: this.countReceived,color: '#f39915' },
            { label: 'PAID', y: this.countPaid ,color: '#21bf06'},
            { label: 'OVERDUE', y: this.countOverdue,color: '#dc3545'},
          ],
        },
      ],

    }
  }

  createLineChartOptions() {
    return{
      animationEnabled: true,
      title: {
        text: 'Invoices Status',
      },
      theme: 'light1', // "light1", "dark1", "dark2"
      data: [
        {
          type: 'line',
          dataPoints: [
            { label: 'SENT', y: this.countSent , color: '#3b86d1'},
            { label: 'RECEIVED', y: this.countReceived,color: '#f39915' },
            { label: 'PAID', y: this.countPaid ,color: '#21bf06'},
            { label: 'OVERDUE', y: this.countOverdue,color: '#dc3545'},
          ],
        },
      ],
    }
  }
   
  
  
}
