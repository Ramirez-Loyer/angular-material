import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
quantity: string | number | undefined;
empty_cart: boolean = false;

cart: any;

  constructor() { }
  ngOnInit(): void {
   
  }

  initCart(){
    
  }

  onRemoveFromCart(){
   
  }

}

