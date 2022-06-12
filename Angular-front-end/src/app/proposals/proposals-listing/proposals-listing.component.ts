import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Proposal } from '../../Models/proposal';
import { Book } from 'src/app/Models/book';
import { Transaction } from 'src/app/Models/transaction';

@Component({
  selector: 'app-proposals-listing',
  templateUrl: './proposals-listing.component.html',
  styleUrls: ['./proposals-listing.component.css'],
})
export class ProposalsListingComponent implements OnInit {
  proposals: Proposal[] = [];
  receiver: any; //adicinar aos campos da proposal maybe
  btnadmin = false;
  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('admin')?.match("admin")) this.btnadmin =true;
    this.getProposals();
    this.restService.getEmployees().subscribe((employeesData) => {
      this.receiver = employeesData[0];
    });
  }

  getProposals(): void {
    this.restService
      .getProposals()
      .subscribe((proposals) => (this.proposals = proposals));
  }

  deleteProposal(id: string) {
    this.restService.deleteProposal(id).subscribe(
      (res) => {
        this.getProposals();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  acceptProposal(sender: any, books: [Book], idProposal: string) {
    //modificar o array Books Sold do cliente e Adicionar os livros à loja
    for (let book of books) {
      this.restService.addBook(book).subscribe(
        (result: Book) => {
          console.log(result);
        },
        (err) => {
          console.log(err);
        }
      );
      sender.booksSold.push(book);
    }

    this.restService.updateCliente(sender._id, sender).subscribe(
      (result) => {
        console.log(JSON.stringify(sender));
      },
      (err) => {
        console.log(err);
      }
    );

    // cria transacao

    let transaction = new Transaction(sender, this.receiver, books, 50);

    this.restService.addTransaction(transaction).subscribe(
      (result: Transaction) => {
        console.log(result);
      },
      (err) => {
        console.log(err);
      }
    );

    // deletar a proposta
    this.restService.deleteProposal(idProposal).subscribe(
      (res) => {
        this.getProposals();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
