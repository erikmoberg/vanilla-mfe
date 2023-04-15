import { CssRegistry } from '../../node_modules/knockoffjs/css-registry.js';
import { KnockoffJsBase } from '../../node_modules/knockoffjs/knockoffjs-base.js';
import { mockData } from '../mock-data.js';
import { ProductModel } from './models/product-model.js';

class ProductListingModel {
  products = new Array<ProductModel>();
}

export class HomePage extends KnockoffJsBase<ProductListingModel> {
  constructor() {
    const model = new ProductListingModel();
    model.products = mockData;
    super(model);
  }

  template(): string {
    return /*html*/`
    <h2>Products</h2>
    <div data-bind="foreach: product of products" class="products">
      <product-item data-bind="state: product"></product-item>
    </div>
        `;
  }

  styles() {
    return /* css */`
    ${CssRegistry.get("common")}

    :host {
      display: block;
      margin-bottom: 2rem;
    }

    .products {
      display: grid;
      grid-gap: 2rem;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    }

    .products product-item {
      background: -webkit-linear-gradient(-70deg, #7200c750 0%, #da452650 100%);
      border-radius: 5px;
    }
    `;
  }
}
