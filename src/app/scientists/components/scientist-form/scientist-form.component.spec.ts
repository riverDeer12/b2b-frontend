import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientistFormComponent } from './scientist-form.component';

describe('ScientistFormComponent', () => {
  let component: ScientistFormComponent;
  let fixture: ComponentFixture<ScientistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientistFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
