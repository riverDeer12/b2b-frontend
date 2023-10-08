import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDataViewComponent } from './entity-data-view.component';

describe('PublicCompaniesDataViewComponent', () => {
  let component: EntityDataViewComponent;
  let fixture: ComponentFixture<EntityDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityDataViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
