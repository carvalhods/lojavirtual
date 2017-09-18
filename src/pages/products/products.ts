import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CartPage } from "../cart/cart";
import { ProductDetailPage } from "../product-detail/product-detail";

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
      picture: 'assets/images/products/img1_1.jpg',
      thumbnail: 'assets/images/products/img1.jpg'
    },
    {
      description: 'Galaxy J5 Duos SM-J500M/DS',
      manufacturer: 'Samsung',
      code: 1002,
      price: 741.06,
      picture: 'assets/images/products/img2_2.jpg',
      thumbnail: 'assets/images/products/img2.jpg'
    },
    {
      description: 'Zenfone Go Live ZB551KL',
      manufacturer: 'Asus',
      code: 1003,
      price: 699,
      picture: 'assets/images/products/img3_3.jpg',
      thumbnail: 'assets/images/products/img3.jpg'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.products = this.products.concat(this.products, this.products);
  }

  onProductSelected(product) {
    console.log(product);
    this.navCtrl.push(ProductDetailPage, {productSelected: product});
  }

  openCart() {
    this.navCtrl.push(CartPage);
  }
}
