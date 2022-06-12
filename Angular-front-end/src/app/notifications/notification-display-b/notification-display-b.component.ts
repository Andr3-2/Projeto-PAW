import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Notification } from '../../Models/notification';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-notification-display-b',
  templateUrl: './notification-display-b.component.html',
  styleUrls: ['./notification-display-b.component.css'],
})
export class NotificationDisplayBComponent implements OnInit {
  notifications: Notification[] = [];
  pipe = new DatePipe('en-US');

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications(): void {
    this.restService
      .getNotifications()
      .subscribe((notifications) => (this.notifications = notifications));
  }
}
