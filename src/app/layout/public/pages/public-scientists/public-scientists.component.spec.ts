import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicScientistsComponent } from './public-scientists.component';

describe('PublicScientistsComponent', () => {
  let component: PublicScientistsComponent;
  let fixture: ComponentFixture<PublicScientistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicScientistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicScientistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
