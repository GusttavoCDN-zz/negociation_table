export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
// * O modificador abstract faz com que essa classe não podessa ser instanciada sozinha em nenhuma parte do código. Ela é dependente de um filho que a extenda e nesse caso, implemente o método template.
