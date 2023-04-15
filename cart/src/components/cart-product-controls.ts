import { KnockoffJsBase } from "../../node_modules/knockoffjs/knockoffjs-base.js";
import { ProductModel } from "./models/product-model.js";

class CartProductModel {
  hasBeenAdded = false;
}

export class CartProductControls extends KnockoffJsBase<CartProductModel> {
  constructor() {
    super(new CartProductModel());
    this.setupEvents();
  }

  setupEvents = () => {
    window.addEventListener("cartItemRefreshed", (e: CustomEvent<ProductModel>) => {
      if (!this.state.hasBeenAdded) {
        this.state.hasBeenAdded = e.detail?.id === this.data?.id;
      }
    });

    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("cartItemDisplayed", { detail: this.data }));
    });
  }

  // property that will be set by parent component
  public data: ProductModel;

  template(): string {
    return /*html*/ `
    <button data-bind="event: { click: addToCart }, disabled: disableAdd">Add to cart</button>
    <button class="remove" data-bind="event: { click: removeFromCart }, disabled: disableRemove">Remove from cart</button>
      `;
  }

  disableAdd = () => {
    return this.state.hasBeenAdded;
  }

  disableRemove = () => {
    return !this.state.hasBeenAdded;
  }

  styles(): string {
    return /*css*/ `
    button {
      border: 0;
      color: white;
      background: -webkit-linear-gradient(-70deg, var(--accent-alt) 0%, var(--accent) 100%);
      border-radius: 100rem;
      padding: 0.5rem 1rem;
    }

    button:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    button[disabled] {
      background: none;
      background-color: gray;
      cursor: default;
      opacity: 1;
    }
      `;
  }

  addToCart = () => {
    window.dispatchEvent(new CustomEvent("addToCart", { detail: this.data }));
    this.state.hasBeenAdded = true;
  }

  removeFromCart = () => {
    window.dispatchEvent(new CustomEvent("removeFromCart", { detail: this.data }));
    this.state.hasBeenAdded = false;
  }
}