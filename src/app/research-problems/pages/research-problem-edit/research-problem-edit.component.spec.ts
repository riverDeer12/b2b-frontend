import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProblemEditComponent } from './research-problem-edit.component';

describe('ResearchProblemsEditComponent', () => {
  let component: ResearchProblemEditComponent;
  let fixture: ComponentFixture<ResearchProblemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchProblemEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchProblemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
