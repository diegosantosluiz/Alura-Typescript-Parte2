export class View {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(model: string): void {
    this.elemento.innerHTML = this.template(model);
  }

  template(model: string): string {
    throw Error('Classe filha precisa implementar template o método template');
  }
}
