import { IOrder } from './calculate-total-amounts';

export class Order implements IOrder {
  calculateTotal() {
    return 100;
  }
}