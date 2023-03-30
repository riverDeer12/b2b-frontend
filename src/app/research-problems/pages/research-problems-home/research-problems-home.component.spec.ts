import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProblemsHomeComponent } from './research-problems-home.component';

describe('ResearchProblemsHomeComponent', () => {
  let component: ResearchProblemsHomeComponent;
  let fixture: ComponentFixture<ResearchProblemsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchProblemsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchProblemsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
