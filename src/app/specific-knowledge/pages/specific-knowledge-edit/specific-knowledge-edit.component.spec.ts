import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificKnowledgeEditComponent } from './specific-knowledge-edit.component';

describe('CategoryEditComponent', () => {
  let component: SpecificKnowledgeEditComponent;
  let fixture: ComponentFixture<SpecificKnowledgeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificKnowledgeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificKnowledgeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
