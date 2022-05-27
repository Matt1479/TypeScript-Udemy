function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookElement = document.getElementById(hookId);

    if (hookElement) {
      hookElement.innerHTML = template;
    }
  };
}

@WithTemplate("<p>Rendering this message inside of the template</p>", "app")
class Person {
  name = "Mark";

  constructor() {
    console.log("Creating person object...");
  }
}
