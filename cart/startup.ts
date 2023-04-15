import { InlineCart } from "./src/components/inline-cart.js";
import { CartPage } from "./src/components/cart-page.js";
import { CartProductControls } from "./src/components/cart-product-controls.js";

customElements.define("cart-page", CartPage);
customElements.define("inline-cart", InlineCart);
customElements.define("cart-product-controls", CartProductControls);
