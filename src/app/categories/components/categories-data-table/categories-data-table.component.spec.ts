import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDataTableComponent } from './categories-data-table.component';

describe('CategoriesDataTableComponent', () => {
  let component: CategoriesDataTableComponent;
  let fixture: ComponentFixture<CategoriesDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
