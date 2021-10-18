export function createElement(tagName, props, childElements) {
    const element = document.createElement(tagName);      //this function gets importet in every js to create Elements
    if (props) {
      Object.assign(element, props);
    }
    if (childElements) {
      element.append(...childElements);
    }
    return element;
}