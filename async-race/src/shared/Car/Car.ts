import { BaseComponent } from '../baseComponent';
import './Car.scss';
import { CarControl } from './carControl';
import { EngineControl } from './engineControl';

export class Car extends BaseComponent {
  private flag = new BaseComponent(this.element, 'span', ['finish-flag']);

  public id: number;

  private car = new BaseComponent(this.element, 'span', ['car']);

  private carControls: CarControl;

  name = new BaseComponent(this.element, 'h3', ['car-name']);

  private engineControl = new EngineControl(this.element);

  selected = false;

  constructor(node: HTMLElement, name: string, color: string, id: number) {
    super(node, 'li', ['car-item']);
    this.car.element.innerHTML = `<svg width="80" height="20" viewBox="0 0 108 35" fill="${color}" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
      <path d="M77.5515 10.1862C77.5515 10.1862 69.5622 3.58993 60.7671 1.2452C51.9717 -1.09954 32.1828 0.439402 28.3711 1.2452C24.5594 2.05099 11.8067 7.8415 11.8067 7.8415C11.8067 7.8415 0.228993 6.00864 1.62197 10.4062C3.01527 14.8037 0.962468 13.7043 0.156674 18.5418C-0.649121 23.3788 1.91556 25.9435 1.91556 25.9435L4.11432 26.3094L4.40791 27.3538C7.54285 27.3538 10.2107 27.4894 12.4592 27.6872C12.4506 27.5223 12.4343 27.3574 12.4343 27.1889C12.4343 21.9155 16.7247 17.6242 21.9997 17.6242C27.2747 17.6242 31.5651 21.9136 31.5651 27.1889C31.5651 27.8948 31.4825 28.5785 31.3382 29.2417H77.7485C77.6025 28.5805 77.5216 27.8948 77.5216 27.1889C77.5216 21.9155 81.811 17.6242 87.0863 17.6242C92.3613 17.6242 96.6527 21.9136 96.6527 27.1889C96.6527 27.8948 96.5701 28.5785 96.4258 29.2417H103.285C104.091 27.9224 105.849 27.8487 105.849 27.8487C107.682 26.5294 107.682 21.3987 107.608 20.299C107.535 19.1993 105.044 16.6349 105.044 16.6349C98.5874 12.5326 77.5515 10.1862 77.5515 10.1862Z"/>
      <path d="M21.9967 19.3867C17.6851 19.3867 14.1902 22.8809 14.1902 27.1925C14.1902 27.4241 14.2393 27.6424 14.2592 27.8693C14.6069 31.8578 17.9179 34.998 21.997 34.998C25.5921 34.998 28.59 32.5518 29.496 29.2434C29.6754 28.5855 29.8035 27.9068 29.8035 27.1906C29.8012 22.8789 26.3083 19.3867 21.9967 19.3867Z"/>
      <path d="M87.0804 19.3867C82.7685 19.3867 79.2749 22.8809 79.2749 27.1925C79.2749 27.9068 79.4003 28.5872 79.5824 29.2454C80.4877 32.5541 83.4853 35 87.0807 35C90.6761 35 93.6734 32.5541 94.5804 29.2454C94.7588 28.5875 94.8879 27.9091 94.8879 27.1925C94.8859 22.8789 91.392 19.3867 87.0804 19.3867Z"/>
      </g><defs><clipPath id="clip0"><rect width="107.631" height="35"/></clipPath></defs></svg>`;
    this.id = id;
    this.carControls = new CarControl(this.element);
    this.name.element.textContent = `${name}`;
  }

  onSelect(callback: () => void): void {
    this.carControls.selectCar(callback);
  }

  onDelete(callback: () => void): void {
    this.carControls.deleteCar(this.id, this.element, callback);
  }
}