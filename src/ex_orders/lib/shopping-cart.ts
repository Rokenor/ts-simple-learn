import { IOrder } from './calculate-total-amounts';

export class ShoppingCart implements IOrder {
  calculateTotal() {
    return 100;
  }
};