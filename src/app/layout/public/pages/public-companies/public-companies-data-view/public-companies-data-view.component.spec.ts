import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCompaniesDataViewComponent } from './public-companies-data-view.component';

describe('PublicCompaniesDataViewComponent', () => {
  let component: PublicCompaniesDataViewComponent;
  let fixture: ComponentFixture<PublicCompaniesDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicCompaniesDataViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicCompaniesDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
