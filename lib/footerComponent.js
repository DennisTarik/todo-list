import { createElement } from "./elements.js";

export function createFooterComponent() {
    const footerElement = createElement(
      "h1", {
        textContent: "Footer",
        className: "footer",
  },
  );
  return footerElement;
}