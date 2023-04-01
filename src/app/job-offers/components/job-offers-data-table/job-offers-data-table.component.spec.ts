import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersDataTableComponent } from './job-offers-data-table.component';

describe('CategoriesDataTableComponent', () => {
  let component: JobOffersDataTableComponent;
  let fixture: ComponentFixture<JobOffersDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOffersDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOffersDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
