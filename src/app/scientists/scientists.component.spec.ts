import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientistsComponent } from './scientists.component';

describe('ScientistsComponent', () => {
  let component: ScientistsComponent;
  let fixture: ComponentFixture<ScientistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
