import { createElement } from "./elements.js";

export function createFooterComponent() {
    const footerElement = createElement(      //this line creates the footer
      "h1", {
        textContent: "Footer",
        className: "footer",
  },
  );
  return footerElement;
}