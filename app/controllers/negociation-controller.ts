import {Negociation} from '../models/negociation.js';
import { Negociations } from '../models/negociations.js';
import { viewMessage } from '../views/mensagem-view.js';
import { NegociationsView } from '../views/negociations-view.js';

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negociations = new Negociations;
  private negociationsView = new NegociationsView('#negociations-view');
  private viewMessage = new viewMessage('#mensagemView');

  constructor() {
    this.inputDate = document.querySelector('#data');
    this.inputQuantity = document.querySelector('#quantidade');
    this.inputValue = document.querySelector('#valor');
    this.negociationsView.update(this.negociations);
  }

  add(): void {
    const negociation = this.createNegociation();
    this.negociations.add(negociation);
    this.negociationsView.update(this.negociations);
    this.viewMessage.update('Negociação Adicionada com Sucesso');
    this.clearForm();
  }

  createNegociation(): Negociation {
    const exp = /-/g; // * Regex para encontrar todos os - na data.
    const date = new Date(this.inputDate.value.replace(exp, ','));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);
    return new Negociation(date, quantity, value);
  }

  clearForm(): void {
    this.inputDate.value = '';
    this.inputQuantity.value = '';
    this.inputValue.value = '';
    this.inputDate.focus();
  }
}
