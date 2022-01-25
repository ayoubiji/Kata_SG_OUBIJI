import { initialState } from './store/states/main.state';
import { reducers } from './store/reducers/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { SaveMoneyComponent } from './features/save-money/save-money.component';
import { RetrieveComponent } from './features/retrieve/retrieve.component';
import { OperationsComponent } from './features/operations/operations.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SaveMoneyComponent,
    RetrieveComponent,
    OperationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      initialState,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
