import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicResearchProblemsComponent } from './public-research-problems.component';

describe('PublicResearchProblemsComponent', () => {
  let component: PublicResearchProblemsComponent;
  let fixture: ComponentFixture<PublicResearchProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicResearchProblemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicResearchProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
