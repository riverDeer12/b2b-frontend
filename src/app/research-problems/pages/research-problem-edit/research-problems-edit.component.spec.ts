import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProblemsEditComponent } from './research-problems-edit.component';

describe('ResearchProblemsEditComponent', () => {
  let component: ResearchProblemsEditComponent;
  let fixture: ComponentFixture<ResearchProblemsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchProblemsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchProblemsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
