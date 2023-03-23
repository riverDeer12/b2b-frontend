import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesDataTableComponent } from './companies-data-table.component';

describe('CompaniesDataTableComponent', () => {
  let component: CompaniesDataTableComponent;
  let fixture: ComponentFixture<CompaniesDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompaniesDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
