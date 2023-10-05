import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientistRegistrationFormComponent } from './scientist-registration-form.component';

describe('ScientistRegistrationFormComponent', () => {
  let component: ScientistRegistrationFormComponent;
  let fixture: ComponentFixture<ScientistRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientistRegistrationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientistRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
