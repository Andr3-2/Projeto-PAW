import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Proposal } from '../../Models/proposal';

@Component({
  selector: 'app-proposal-add',
  templateUrl: './proposal-add.component.html',
  styleUrls: ['./proposal-add.component.css'],
})
export class ProposalAddComponent implements OnInit {
  book: any = {};

  proposalData: any = {
    checkedByEmployee: false,
    sender: {},
    books: [],
  };
  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    //recebe o cliente logado
    let currentUserToken: string;
    let userStorageString: any = localStorage.getItem('currentUser');

    if (userStorageString != null) {
      currentUserToken = JSON.parse(userStorageString).token;
      this.restService.getUser(currentUserToken).subscribe((user) => {
        this.proposalData.sender = user;
      });
    }
  }

  addBookToProposal() {
    console.log(JSON.stringify(this.book));

    this.proposalData.books.push(this.book);

    console.log(JSON.stringify(this.proposalData.books));

    this.book = {};
  }

  addProposal() {
    this.restService.addProposal(this.proposalData).subscribe(
      (result: Proposal) => {
        console.log(result);
        this.router.navigate(['/proposals-b']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
