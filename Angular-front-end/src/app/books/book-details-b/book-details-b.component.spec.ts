import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsBComponent } from './book-details-b.component';

describe('BookDetailsBComponent', () => {
  let component: BookDetailsBComponent;
  let fixture: ComponentFixture<BookDetailsBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailsBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
