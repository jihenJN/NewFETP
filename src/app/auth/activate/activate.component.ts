import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivateService } from 'src/app/services/activate.service';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  error = false;
  success = false;
  
  constructor(private activateService: ActivateService, private route: ActivatedRoute) {}

  /*ngOnInit(): void {
    this.route.queryParams.pipe(mergeMap(params => this.activateService.get(params.key))).subscribe({
      next: () => (this.success = true),
      error: () => (this.error = true),
    });

  }*/


  ngOnInit(): void {
    this.route.queryParams.pipe(mergeMap(params => this.activateService.get(params['key']))).subscribe({
      next: () => (this.success = true),
      error: () => (this.error = true),
    
    });
  
  console.log("-----paramms------"+ this.route.queryParams.pipe(mergeMap(params => this.activateService.get(params['key']))).subscribe({
    next: () => (this.success = true),
    error: () => (this.error = true),
  
  }))
  }


}