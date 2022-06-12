import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Transaction } from '../../Models/transaction';

@Component({
  selector: 'app-transactions-listing',
  templateUrl: './transactions-listing.component.html',
  styleUrls: ['./transactions-listing.component.css'],
})
export class TransactionsListingComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.getTransactions();    
  }

  getTransactions(): void {
    this.restService
      .getTransactions()
      .subscribe((transactions) => (this.transactions = transactions));
  }

  //não é suposto eliminar transactions
  deleteTransaction(id: string) {
    this.restService.deleteTransaction(id).subscribe(
      (res) => {
        this.getTransactions();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
