import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProblemsFormComponent } from './research-problems-form.component';

describe('ResearchProblemsFormComponent', () => {
  let component: ResearchProblemsFormComponent;
  let fixture: ComponentFixture<ResearchProblemsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchProblemsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchProblemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
