import { MainState } from './../../store/states/main.state';
import { operation } from './../../models/operation/operation.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss'],
})
export class OperationsComponent implements OnInit {
  operations: operation[];
  constructor(private store: Store<MainState>) {
    this.store.select('operations').subscribe((o) => {
      console.log('o', o);
      this.operations = o;
    });
  }

  ngOnInit(): void {}
}
