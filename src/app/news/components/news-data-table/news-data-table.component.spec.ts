import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDataTableComponent } from './news-data-table.component';

describe('NewsDataTableComponent', () => {
  let component: NewsDataTableComponent;
  let fixture: ComponentFixture<NewsDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
