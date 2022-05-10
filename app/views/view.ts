export abstract class View<T> {
  // * protect permite que elementos filhos possam tocar a proprieda, mas não modificar
  protected element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  abstract template(model: T): string;

  update(model: T): void {
    const template = this.template(model);
    this.element.innerHTML = template;
  }
}



// * O modificador abstract faz com que essa classe não podessa ser instanciada sozinha em nenhuma parte do código. Ela é dependente de um filho que a extenda e nesse caso, implemente o método template.
