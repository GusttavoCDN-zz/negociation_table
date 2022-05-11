export class View {
    constructor(selector, escape) {
        this.escape = false;
        const element = document.querySelector(selector);
        if (element)
            this.element = element;
        else
            throw Error('Campo Invalido, verifique a aplicação!');
    }
    update(model) {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/scritp>/, '');
        }
        this.element.innerHTML = template;
    }
}
