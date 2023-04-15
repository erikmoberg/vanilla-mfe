import { KnockoffJsBase } from '../../node_modules/knockoffjs/knockoffjs-base.js';
import { ProductModel } from './models/product-model.js';

export class ProductItem extends KnockoffJsBase<ProductModel> {
  constructor() {
    super(new ProductModel());
  }

  template(): string {
    return /*html*/`
    <div class="flex-container-1">
      <h3 data-bind="innerText: title"></h3>
      <p data-bind="innerText: description"></p>
    </div>
    <div class="flex-container-2">
      <p class="price"><span data-bind="innerText: priceEUR"></span> €</p>
      <cart-product-controls data-bind="data: state"></cart-product-controls>
    </div>
      `;
  }

  styles() {
    return /* CSS */`
    :host {
      display: flex;
      flex-direction: column;
      background-color: #ccc;
      justify-content: space-between;
      padding: 1rem;
    }

    .price {
      font-weight: bold;
    }
    `;
  }
}
