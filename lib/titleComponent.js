import { createElement } from "./elements.js";

export function createTitleComponent() {      // this function is for the title component
    const titleElement = createElement(
      "h1", {
        textContent: "ToDo-List",
        className: "title",
  },
  );
  return titleElement;
}