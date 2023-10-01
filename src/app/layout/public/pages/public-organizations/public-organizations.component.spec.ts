import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOrganizationsComponent } from './public-organizations.component';

describe('PublicOrganizationsComponent', () => {
  let component: PublicOrganizationsComponent;
  let fixture: ComponentFixture<PublicOrganizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicOrganizationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
