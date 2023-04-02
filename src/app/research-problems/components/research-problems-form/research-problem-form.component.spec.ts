import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProblemFormComponent } from './research-problem-form.component';

describe('ResearchProblemsFormComponent', () => {
  let component: ResearchProblemFormComponent;
  let fixture: ComponentFixture<ResearchProblemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchProblemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchProblemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
