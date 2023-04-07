import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGeneralFormComponent } from './company-general-form.component';

describe('CompanyGeneralFormComponent', () => {
  let component: CompanyGeneralFormComponent;
  let fixture: ComponentFixture<CompanyGeneralFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyGeneralFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyGeneralFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
