import { GetCusomer } from './../store/actions/customer/customer.action';
import { Customer } from './../models/customer/customer.model';
import { MainState } from './../store/states/main.state';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  customer: Customer;
  constructor(private store: Store<MainState>) {
    this.store.select('customer').subscribe((c) => {
      this.customer = c;
      console.log('c', c);
    });
  }
  saveMoney(amount: number) {
    console.log('amount', amount);
    this.customer = {
      ...this.customer,
      ...{ balance: this.customer.account.balance + Number(amount) },
    };
    this.store.dispatch(new GetCusomer({ customer: this.customer }));
  }
  retrieveMoney(amount: number) {
    let balance = this.customer.account.balance - Number(amount);
    if (balance > 0) {
      this.customer = {
        ...this.customer,
        ...{ balance },
      };
      this.store.dispatch(new GetCusomer({ customer: this.customer }));
    }
  }
  addOperation() {}
}
