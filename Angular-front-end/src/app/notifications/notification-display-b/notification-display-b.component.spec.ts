import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDisplayBComponent } from './notification-display-b.component';

describe('NotificationDisplayBComponent', () => {
  let component: NotificationDisplayBComponent;
  let fixture: ComponentFixture<NotificationDisplayBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationDisplayBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationDisplayBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
