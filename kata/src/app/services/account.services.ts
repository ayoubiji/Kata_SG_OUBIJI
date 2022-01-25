import { GetOperations } from './../store/actions/operations/operations.action';
import { operation } from './../models/operation/operation.model';
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
  operations: operation[];
  constructor(private store: Store<MainState>) {
    this.store.select('customer').subscribe((c) => {
      this.customer = c;
    });
    this.store.select('operations').subscribe((o) => {
      this.operations = o;
      console.log('o', o);
    });
  }
  saveMoney(amount: number) {
    let balance = this.customer.account.balance - Number(amount);
    this.customer = {
      ...this.customer,
      ...{ balance },
    };
    this.store.dispatch(new GetCusomer({ customer: this.customer }));
    this.store.dispatch(
      new GetOperations({
        operations: [
          ...this.operations,
          {
            ...this.customer.account,
            ...{ amount, typeOfOperation: 'Save' },
          },
        ],
      })
    );
  }
  retrieveMoney(amount: number) {
    let balance = this.customer.account.balance - Number(amount);
    if (balance > 0) {
      this.customer = {
        ...this.customer,
        ...{ balance },
      };
      this.store.dispatch(new GetCusomer({ customer: this.customer }));
      this.operations.push({
        ...this.customer.account,
        ...{ amount, typeOfOperation: 'Retrieve' },
      });
      this.store.dispatch(new GetOperations({ operations: this.operations }));
    }
  }
  addOperation() {}
}
