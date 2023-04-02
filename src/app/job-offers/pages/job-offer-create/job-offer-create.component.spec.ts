import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferCreateComponent } from './job-offer-create.component';

describe('CategoryCreateComponent', () => {
  let component: JobOfferCreateComponent;
  let fixture: ComponentFixture<JobOfferCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOfferCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
