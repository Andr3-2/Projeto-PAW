import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Proposal } from '../../Models/proposal';
import { Book } from 'src/app/Models/book';
import { Transaction } from 'src/app/Models/transaction';
import { Cliente } from 'src/app/Models/cliente';

@Component({
  selector: 'app-proposals-listing-b',
  templateUrl: './proposals-listing-b.component.html',
  styleUrls: ['./proposals-listing-b.component.css'],
})
export class ProposalsListingBComponent implements OnInit {
  proposals: Proposal[] = [];
  receiver: any; //adicinar aos campos da proposal maybe
  user: any;

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.getUser();
    //get employee for receiver na transaction
    this.restService.getEmployees().subscribe((employeesData) => {
      this.receiver = employeesData[0];
    });
  }

  getUser() {
    //recebe o cliente logado
    let currentUserToken: string;
    let userStorageString: any = localStorage.getItem('currentUser');

    if (userStorageString != null) {
      currentUserToken = JSON.parse(userStorageString).token;
      this.restService.getUser(currentUserToken).subscribe((user) => {
        this.user = user;
        this.getProposals();
      });
    }
  }

  getProposals(): void {
    //recebe todas as proposals cujo sender seja igual ao cliente logado
    this.restService.getProposals().subscribe((proposals) => {
      this.proposals = [];
      for (let proposal of proposals) {
        if (proposal.sender._id == this.user._id) {
          this.proposals.push(proposal);
        }
      }
    });
  }

  refuseProposal(id: string) {
    this.restService.deleteProposal(id).subscribe(
      (res) => {
        this.getProposals();
        console.log('proposal refused');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  acceptProposal(sender: any, books: [Book], idProposal: string) {
    //modificar o array Books Sold do cliente e Adicionar os livros à loja
    let totalPrice: number = 0;
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
      totalPrice +=
        book.new_price * book.new_quantity +
        book.used_price * book.used_quantity;
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
    let transaction = new Transaction(sender, this.receiver, books, totalPrice);

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
