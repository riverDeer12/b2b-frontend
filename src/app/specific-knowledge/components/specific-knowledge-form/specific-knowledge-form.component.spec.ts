import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificKnowledgeFormComponent } from './specific-knowledge-form.component';

describe('CategoryFormComponent', () => {
  let component: SpecificKnowledgeFormComponent;
  let fixture: ComponentFixture<SpecificKnowledgeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificKnowledgeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificKnowledgeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
