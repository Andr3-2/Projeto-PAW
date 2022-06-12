import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../Models/book';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cart: Book[] = [];
  total: Number = 0;
  constructor(
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.shoppingCartService.cart.subscribe((cart) => {
      this.cart = cart;
      console.log(JSON.stringify(cart));
    });

    this.shoppingCartService.total.subscribe((total) => {
      this.total = total;
      console.log("preço total ", total);
    });
  }

  addBookToCart(book: Book): void {
    this.shoppingCartService.addBookToCart(book);
  }

  removeBookFromCart(index: number): void {
    this.shoppingCartService.removeBookFromCart(index);
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }

  makePurchase() {
    //provavelmente é melhor passar a info de outra forma (precisa ser de uma forma imutável)
    this.router.navigate(['/payment', JSON.stringify(this.cart)]);
  }
}
