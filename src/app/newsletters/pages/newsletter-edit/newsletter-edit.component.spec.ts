import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterEditComponent } from './newsletter-edit.component';

describe('NewsEditComponent', () => {
  let component: NewsletterEditComponent;
  let fixture: ComponentFixture<NewsletterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
