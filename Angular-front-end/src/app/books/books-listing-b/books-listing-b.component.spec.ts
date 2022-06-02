import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListingBComponent } from './books-listing-b.component';

describe('BooksListingBComponent', () => {
  let component: BooksListingBComponent;
  let fixture: ComponentFixture<BooksListingBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksListingBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListingBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
