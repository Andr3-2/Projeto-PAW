import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Notification } from '../../Models/notification';
import { Book } from 'src/app/Models/book';

@Component({
  selector: 'app-notifications-listing',
  templateUrl: './notifications-listing.component.html',
  styleUrls: ['./notifications-listing.component.css'],
})
export class NotificationsListingComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications(): void {
    this.restService
      .getNotifications()
      .subscribe((notifications) => (this.notifications = notifications));
  }

  deleteNotification(id: string) {
    this.restService.deleteNotification(id).subscribe(
      (res) => {
        this.getNotifications();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addToStore(book: any, idNotification: string) {
    this.restService.addBook(book).subscribe(
      (result: Book) => {
        console.log(result);
      },
      (err) => {
        console.log(err);
      }
    );
    this.restService.deleteNotification(idNotification).subscribe(
      (res) => {
        this.getNotifications();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
