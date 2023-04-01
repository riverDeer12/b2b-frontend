import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificKnowledgeCreateComponent } from './specific-knowledge-create.component';

describe('CategoryCreateComponent', () => {
  let component: SpecificKnowledgeCreateComponent;
  let fixture: ComponentFixture<SpecificKnowledgeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificKnowledgeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificKnowledgeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
