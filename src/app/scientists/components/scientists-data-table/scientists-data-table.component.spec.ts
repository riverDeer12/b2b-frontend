import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientistsDataTableComponent } from './scientists-data-table.component';

describe('ScientistsDataTableComponent', () => {
  let component: ScientistsDataTableComponent;
  let fixture: ComponentFixture<ScientistsDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientistsDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientistsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
