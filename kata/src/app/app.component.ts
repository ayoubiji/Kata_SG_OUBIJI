import { MainState } from './store/states/main.state';
import { Customer } from 'src/app/models/customer/customer.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  customer: Customer;
  constructor(private store: Store<MainState>) {
    this.store.select('customer').subscribe((c) => {
      this.customer = { ...c };
      console.log('customer', this.customer);
    });
  }
}
