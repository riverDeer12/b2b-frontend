import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleEntityCardComponent } from './simple-entity-card.component';

describe('EntityCardComponent', () => {
  let component: SimpleEntityCardComponent;
  let fixture: ComponentFixture<SimpleEntityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleEntityCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleEntityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
