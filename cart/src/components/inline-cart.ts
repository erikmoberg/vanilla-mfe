import { KnockoffJsBase } from "../../node_modules/knockoffjs/knockoffjs-base.js";
import { ProductModel } from "./models/product-model.js";

class InlineCartModel {
  products = new Array<ProductModel>();
}

export class InlineCart extends KnockoffJsBase<InlineCartModel> {
  constructor() {
    super({ products: [] });

    window.addEventListener("addToCart", (e: CustomEvent<ProductModel>) => {
      this.state.products = [...this.state.products, e.detail];
    });

    window.addEventListener("removeFromCart", (e: CustomEvent<ProductModel>) => {
      this.state.products = this.state.products.filter(p => p.id !== e.detail.id);
    });

    window.addEventListener("cartPageOpened", (e: CustomEvent<null>) => {
      window.dispatchEvent(new CustomEvent("cartRefreshed", { detail: this.state.products }));
    });

    window.addEventListener("cartItemDisplayed", (e: CustomEvent<ProductModel>) => {
      const product = this.state.products.find(x => x.id === e.detail.id);
      if (!product) {
        return;
      }

      window.dispatchEvent(new CustomEvent("cartItemRefreshed", { detail: product }));
    });
  }

  template(): string {
    return /*html*/ `
    <div class="background">
      <span>🧺 <span class="item-number" data-bind="innerText: products.length"></span></span>
    </div>
      `;
  }

  styles(): string {
    return /*css*/ `
    .background {
      background: -webkit-linear-gradient(-70deg, var(--accent-alt) 0%, var(--accent) 100%);
      border-radius: 100rem;
      padding: 1rem 2rem;
      margin: 1rem;
      font-size: 1.3rem;
    }

    .item-number {
      color: white;
    }

    h2 {
      color: white;
    }
      `;
  }

}