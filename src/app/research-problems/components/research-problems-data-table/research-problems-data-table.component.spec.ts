import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProblemsDataTableComponent } from './research-problems-data-table.component';

describe('ResearchProblemsDataTableComponent', () => {
  let component: ResearchProblemsDataTableComponent;
  let fixture: ComponentFixture<ResearchProblemsDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchProblemsDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchProblemsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
