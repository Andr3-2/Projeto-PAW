import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalsListingBComponent } from './proposals-listing-b.component';

describe('ProposalsListingBComponent', () => {
  let component: ProposalsListingBComponent;
  let fixture: ComponentFixture<ProposalsListingBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalsListingBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalsListingBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
