import { AccountService } from './../../services/account.services';
import { MainState } from './../../store/states/main.state';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.scss'],
})
export class RetrieveComponent implements OnInit {
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
  retrieve(form) {
    this.accountService.retrieveMoney(form.value.amount);
  }
}
