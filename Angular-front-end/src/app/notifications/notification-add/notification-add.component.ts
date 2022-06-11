import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Notification } from '../../Models/notification';

@Component({
  selector: 'app-notification-add',
  templateUrl: './notification-add.component.html',
  styleUrls: ['./notification-add.component.css'],
})
export class NotificationAddComponent implements OnInit {
  bookForm: boolean = false;

  @Input() notificationData: any = {
    book: {},
  };
  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {}

  showBookForm() {    
    if(!this.bookForm){
      this.bookForm = true;
    }else{
      this.bookForm = false;
    }
  }

  addNotification() {
    this.restService.addNotification(this.notificationData).subscribe(
      (result: Notification) => {
        console.log(result);
        this.router.navigate(['/notifications']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
