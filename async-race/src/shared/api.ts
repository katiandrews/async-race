import { CarModel } from './models/car-model';
import { CarProperties } from './models/car-properties';
import { CarsPage } from './models/Cars-page-model';
import { DriveStatus, EngineParam } from './models/engineParam';
import { UpdateWinner, WinnerModel } from './models/winner-model';
import { WinnersPage } from './models/winnersPage-model';

export class Api {
  private base = 'http://127.0.0.1:3000';

  private garage = `${this.base}/garage`;

  private engine = `${this.base}/engine`;

  private winners = `${this.base}/winners`;

  async getCars(page = 1, limit = 7): Promise<CarsPage> {
    const response = await fetch(`${this.garage}?_page=${page}&_limit=${limit}`);
    return {
      items: await response.json(),
      count: Number(response.headers.get('X-Total-Count')),
    };
  }

  async getCar(id: number): Promise<CarModel> {
    const response = await fetch(`${this.garage}/${id}`);
    return response.json();
  }

  async createCar(body: CarProperties): Promise<CarModel> {
    const response = await fetch(this.garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  async deleteCar(id: number): Promise<void> {
    (await fetch(`${this.garage}/${id}`, { method: 'DELETE' })).json();
  }

  async updateCar(id: number, body: CarProperties): Promise<void> {
    (await fetch(`${this.garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })).json();
  }

  async startEngine(id: number): Promise<EngineParam> {
    const respone = await (fetch(`${this.engine}?id=${id}&status=started`));
    return respone.json();
  }

  async stopEngine(id: number): Promise<void> {
    (await (fetch(`${this.engine}?id=${id}&status=stopped`))).json();
  }

  async driveCar(id: number): Promise<DriveStatus> {
    const response = await fetch(`${this.engine}?id=${id}&status=drive`).catch();
    return response.status !== 200 ? { success: false } : { ...await response.json() };
  }

  async getWinners(page = 1, limit = 10, sort: string, order: string): Promise<WinnersPage> {
    const response = await fetch(`${this.winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
    return {
      items: await response.json(),
      count: Number(response.headers.get('X-Total-Count')),
    };
  }

  async getWinner(id: number): Promise<WinnerModel> {
    const response = await fetch(`${this.winners}/${id}`)
    return response.json();
  }

  async createWinner(body: WinnerModel): Promise<WinnerModel> {
    const response = await fetch(this.winners, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  async updateWinner(id: number, body: UpdateWinner): Promise<WinnerModel> {
    const response = await fetch(`${this.winners}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  async deleteWinner(id: number) {
    (await fetch(`${this.winners}/${id}`, { method: 'DELETE' })).json();
  }
}

export const api = new Api();
