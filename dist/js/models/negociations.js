export class Negociations {
    constructor() {
        this.negociations = [];
    }
    add(negociation) {
        this.negociations.push(negociation);
    }
    // * modificador ReadOnly faz com que o dado não possa ser modificado diretamente. Em array por exemplo, não sera possivel utilizar métodos como o PoP ou Shift que alteram diretamente o array Original.
    list() {
        return this.negociations;
        // return [...this.negociations]; // * Cria uma referencia a lista para nunca alterar a lista original em JS!
    }
}
