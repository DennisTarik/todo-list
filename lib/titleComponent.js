import { createElement } from "./elements.js";

export function createTitleComponent() {
    const titleElement = createElement(
      "h1", {
        textContent: "ToDo-List",
        className: "title",
  },
  );
  return titleElement;
}