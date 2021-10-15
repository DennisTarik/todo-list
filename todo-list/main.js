import { createTitleComponent } from "/lib/titleComponent.js";
import { createFooterComponent } from "/lib/footerComponent.js";
import { createTodoComponent } from "/lib/todoComponent.js";
import { createElement } from "./lib/elements";

function createApp() {
    const appElement = document.querySelector("#app");
  
    const titleComponent = createTitleComponent();
    
    const footerComponent = createFooterComponent();

    const formElement = createTodoComponent (function (task) {

      let answerText = createElement(
        "p", {
          className: "answer"
        },
        [`${task}`]
      ); 
    appElement.append(answerText);
    }
  );
  
    appElement.append(titleComponent);
    appElement.append(formElement);
    appElement.append(footerComponent);
}

createApp ();