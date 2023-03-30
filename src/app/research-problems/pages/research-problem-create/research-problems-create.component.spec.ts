import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProblemsCreateComponent } from './research-problems-create.component';

describe('ResearchProblemsCreateComponent', () => {
  let component: ResearchProblemsCreateComponent;
  let fixture: ComponentFixture<ResearchProblemsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchProblemsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchProblemsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
