import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientistDetailsComponent } from './scientist-details.component';

describe('ScientistDetailsComponent', () => {
  let component: ScientistDetailsComponent;
  let fixture: ComponentFixture<ScientistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientistDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
