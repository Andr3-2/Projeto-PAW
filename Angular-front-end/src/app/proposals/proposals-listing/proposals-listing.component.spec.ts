import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalsListingComponent } from './proposals-listing.component';

describe('ProposalsListingComponent', () => {
  let component: ProposalsListingComponent;
  let fixture: ComponentFixture<ProposalsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
