import { KnockoffJsBase } from "../../node_modules/knockoffjs/knockoffjs-base.js";
import { ProductModel } from "./models/product-model.js";

class CartPageModel {
  products = new Array<ProductModel>();
}

export class CartPage extends KnockoffJsBase<CartPageModel> {
  constructor() {
    super(new CartPageModel());

    window.addEventListener("cartRefreshed", (e: CustomEvent<ProductModel[]>) => {
      const products = JSON.parse(JSON.stringify(e.detail)) as ProductModel[];
      this.state.products = products;
    });

    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("cartPageOpened", { }));
    });
  }

  getSum = () => {
    return this.state.products.reduce((acc, p) => acc + p.priceEUR, 0);
  }

  productSumStyle = () => {
    return this.state.products.length > 0 ? "" : "none";
  }

  isEmptyStyle = () => {
    return this.state.products.length > 0 ? "none" : "";
  }

  template(): string {
    return /*html*/ `
      <h2>Cart</h2>
      <h4 data-bind="style.display: isEmptyStyle">The cart is empty.</h4>
      <div data-bind="foreach: product of products">
        <div class="product">
          <div class="left">
            <h4 data-bind="innerText: title"></h4>
          </div>
          <div class="right">
            <p><span data-bind="innerText: priceEUR"></span>&nbsp;€</p>
          </div>
        </div>
      </div>
      <div data-bind="style.display: productSumStyle">
        <hr />
        <div class="product">
          <div class="left">
            <h3>Sum: </h3>
          </div>
          <div class="right">
            <p><span data-bind="innerText: getSum"></span>&nbsp;€</p>
          </div>
        </div>
        <h3><a href="/site2">Go to payment</a></h3>
      </div>`;
  }

  styles(): string {
    return /*css*/ `
    .product {
      display: flex;
    }

    .left {
      flex: 3;
    }

    .right {
      flex: 1;
      font-weight: bold;
      display: flex;
      justify-content: flex-end;
    }

    .right p {
      display: flex;
      align-items: flex-end;
    }
    `;
  }
}