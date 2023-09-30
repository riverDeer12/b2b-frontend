import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCompaniesComponent } from './public-companies.component';

describe('PublicCompaniesComponent', () => {
  let component: PublicCompaniesComponent;
  let fixture: ComponentFixture<PublicCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicCompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
