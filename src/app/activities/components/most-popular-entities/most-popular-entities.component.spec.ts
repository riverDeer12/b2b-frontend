import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularEntitiesComponent } from './most-popular-entities.component';

describe('MostPopularEntitiesComponent', () => {
  let component: MostPopularEntitiesComponent;
  let fixture: ComponentFixture<MostPopularEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostPopularEntitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostPopularEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
