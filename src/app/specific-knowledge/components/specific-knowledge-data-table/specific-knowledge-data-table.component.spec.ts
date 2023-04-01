import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificKnowledgeDataTableComponent } from './specific-knowledge-data-table.component';

describe('CategoriesDataTableComponent', () => {
  let component: SpecificKnowledgeDataTableComponent;
  let fixture: ComponentFixture<SpecificKnowledgeDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificKnowledgeDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificKnowledgeDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
