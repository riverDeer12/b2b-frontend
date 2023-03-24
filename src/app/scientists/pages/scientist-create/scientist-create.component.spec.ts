import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientistCreateComponent } from './scientist-create.component';

describe('ScientistCreateComponent', () => {
  let component: ScientistCreateComponent;
  let fixture: ComponentFixture<ScientistCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientistCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
