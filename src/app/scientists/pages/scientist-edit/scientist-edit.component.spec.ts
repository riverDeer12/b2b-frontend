import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientistEditComponent } from './scientist-edit.component';

describe('ScientistEditComponent', () => {
  let component: ScientistEditComponent;
  let fixture: ComponentFixture<ScientistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientistEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
