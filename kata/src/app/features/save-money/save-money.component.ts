import { AccountService } from './../../services/account.services';
import { MainState } from './../../store/states/main.state';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-save-money',
  templateUrl: './save-money.component.html',
  styleUrls: ['./save-money.component.scss'],
})
export class SaveMoneyComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private store: Store<MainState>,
    private accountService: AccountService
  ) {}
  ngOnInit() {
    this.myForm = new FormGroup({
      amount: new FormControl(0),
    });
  }
  save(form) {
    this.accountService.saveMoney(form.value.amount);
  }
}
