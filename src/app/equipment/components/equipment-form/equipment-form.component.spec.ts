import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentFormComponent } from './equipment-form.component';

describe('CategoryFormComponent', () => {
  let component: EquipmentFormComponent;
  let fixture: ComponentFixture<EquipmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
