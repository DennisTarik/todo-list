import { createElement } from "./elements.js";

export function createTodoComponent(pushButton) {
    const todoElement = createElement(      // this line creates the input area with the placeholder 
      "input", {
        type: "text",
        placeholder: "Enter your Task",
        className: "todo",
      },
    );

    const submitButton = createElement(     // in this section we create the submitbutton
      "button", {
      type: "submit",
      textContent: "Submit",
      className: "submitButton",
      },
    );
    
    const formElement = createElement(      //here we do create the new linke below the input area after you click on the submit button
      "form", {
        type: "form",
        className: "formField", onsubmit: function(event) {
          event.preventDefault();
          pushButton(todoElement.value);
        },
      },
      [todoElement, submitButton]     //here we do set the order in which the button and the input will be displayed
    );

  return formElement;
}
