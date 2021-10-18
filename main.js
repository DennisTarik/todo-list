import { createElement } from "./lib/elements.js";
import { createTitleComponent } from "./lib/titleComponent.js";
import { createFooterComponent } from "./lib/footerComponent.js";
import { createTodoComponent } from "./lib/todoComponent.js";

function createApp() {
    const appElement = document.querySelector("#app");      //i did select the id app in html here
  
    const titleComponent = createTitleComponent();
    
    const footerComponent = createFooterComponent();

    const formElement = createTodoComponent (function (task) {

      let answerText = createElement(       // this part appends the new task below the input area
        "p", {
          className: "answer"
        },
        [task]
      ); 
    appElement.append(answerText);
    }
  );
  
    appElement.append(titleComponent);      //these lines change the order of the layout
    appElement.append(formElement);
    appElement.append(footerComponent);
}

createApp ();