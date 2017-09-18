import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CartPage } from "../cart/cart";

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  public products = [
    {
      description: 'Galaxy J5 Prime SM-G570M',
      manufacturer: 'Samsung',
      code: 1001,
      price: 764.58,
      thumbnail: 'assets/images/products/img1.jpg'
    },
    {
      description: 'Galaxy J5 Duos SM-J500M/DS',
      manufacturer: 'Samsung',
      code: 1002,
      price: 741.06,
      thumbnail: 'assets/images/products/img2.jpg'
    },
    {
      description: 'Zenfone Go Live ZB551KL',
      manufacturer: 'Asus',
      code: 1003,
      price: 699,
      thumbnail: 'assets/images/products/img3.jpg'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.products = this.products.concat(this.products);
  }

  onClick(product) {
    console.log(product);
  }

  onButtonClick() {
    console.log('Button Click');
  }

  openCart() {
    this.navCtrl.push(CartPage);
  }
}
