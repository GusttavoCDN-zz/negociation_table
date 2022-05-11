export abstract class View<T> {
  // * protect permite que elementos filhos possam tocar a proprieda, mas não modificar
  protected element: HTMLElement;
  private escape = false;

  constructor(selector: string, escape?: boolean) {
    const element = document.querySelector(selector);
    if (element) this.element = element as HTMLElement;
    else throw Error('Campo Invalido, verifique a aplicação!');
  }

  protected abstract template(model: T): string;

  update(model: T): void {
    let template = this.template(model);
    if (this.escape) {
      template = template.replace(/<script>[\s\S]*?<\/scritp>/, '');
    }
    this.element.innerHTML = template;
  }
}

// * O modificador abstract faz com que essa classe não podessa ser instanciada sozinha em nenhuma parte do código. Ela é dependente de um filho que a extenda e nesse caso, implemente o método template.
