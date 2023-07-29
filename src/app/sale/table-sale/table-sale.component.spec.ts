import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSaleComponent } from './table-sale.component';

describe('TableSaleComponent', () => {
  let component: TableSaleComponent;
  let fixture: ComponentFixture<TableSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
