import { createElement } from "./elements.js";

export function createTodoComponent(pushButton) {
    const todoElement = createElement(
      "input", {
        type: "text",
        placeholder: "Enter your Task",
        className: "todo",
      },
    );

    const submitButton = createElement(
      "button", {
      type: "submit",
      textContent: "Submit",
      className: "submitButton",
      },
    );
    
    const formElement = createElement(
      "form", {
        type: "form",
        className: "formField", onsubmit: function(event) {
          event.preventDefault();
          pushButton(todoElement.value);
        },
      },
      [todoElement, submitButton]
    );

  return formElement;
}
