import { Garage } from './components/Garage/garage';
import { Winners } from './components/Winners/winners';
import { BaseComponent } from './shared/baseComponent';
import { Header } from './shared/header/header';

export class App {
  private header: Header = new Header(this.rootElement);

  private main: BaseComponent = new BaseComponent(this.rootElement, 'main', ['main']);

  private garage: Garage = new Garage(this.main.element);

  private winners: Winners = new Winners(this.main.element);

  constructor(readonly rootElement: HTMLElement) {
  }

  toGarage(): void {
    window.location.hash = '#/garage';
    this.winners.element.remove();
    this.main.element.appendChild(this.garage.element);
  }

  toWinners(): void {
    window.location.hash = '#/winners';
    this.garage.element.remove();
    this.winners.updatePage();
    this.main.element.appendChild(this.winners.element);
  }
}
