import {Negociation} from '../models/negociation.js';
import { Negociations } from '../models/negociations.js';
import { viewMessage } from '../views/mensagem-view.js';
import { NegociationsView } from '../views/negociations-view.js';
import { WeekDays } from '../enums/weekDays.js';

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negociations = new Negociations;
  private negociationsView = new NegociationsView('#negociations-view', true);
  private viewMessage = new viewMessage('#mensagemView');

  constructor() {
    this.inputDate = document.querySelector('#data') as HTMLInputElement;
    this.inputQuantity = document.querySelector('#quantidade') as HTMLInputElement;
    this.inputValue = document.querySelector('#valor') as HTMLInputElement;
  }

  add(): void {
    const negociation = this.createNegociation();
    if (!this.isWeekDay(negociation.date)) {
      this.viewMessage.update('Só é possivel fazer negociações em dias úteis')
      return ;
    }
    this.negociations.add(negociation);
    this.negociationsView.update(this.negociations);
    this.clearForm();
    this.updateView();
  }

  private isWeekDay(date: Date): boolean {
    return date.getDay() > WeekDays.DOMINGO && date.getDay() < WeekDays.SABAD0;
  }

  private createNegociation(): Negociation {
    const exp = /-/g; // * Regex para encontrar todos os - na data.
    const date = new Date(this.inputDate.value.replace(exp, ','));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);
    return new Negociation(date, quantity, value);
  }

  private clearForm(): void {
    this.inputDate.value = '';
    this.inputQuantity.value = '';
    this.inputValue.value = '';
    this.inputDate.focus();
  }

  private updateView(): void {
    this.negociationsView.update(this.negociations);
    this.viewMessage.update('Negociação Adicionada com Sucesso');
  }
}
