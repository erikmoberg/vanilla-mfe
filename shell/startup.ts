import { HomePage } from "./src/components/home-page.js"
import { CssRegistry } from "./node_modules/knockoffjs/css-registry.js";
import { Router } from "./node_modules/knockoffjs/router.js";
import { ProductItem } from "./src/components/product-item.js";

// register components
customElements.define("home-page", HomePage);
customElements.define("product-item", ProductItem);

// register common styles
CssRegistry.register("common", /* CSS */
` code {
    background-color: var(--light);
    color: var(--dark-lighter);
  }
  pre code {
    background-color: var(--dark-lighter);
    color: var(--light);
  }
  code {
    padding: 0.10rem 0.25rem;
    border-radius: 0.15rem;
  }
  pre code {
    display: block;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
  }
  a, a:visited {
    color: var(--accent);
  }
  a:hover {
    color: var(--accent-alt);
  }
  div.result {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 2px solid var(--light);
    background-color: #fff;
  }
  p, li {
    line-height: 1.5;
  }
`);

// init router
Router.init("home-page", window.location.href.includes("localhost") ? "" : "/knockoffjs");