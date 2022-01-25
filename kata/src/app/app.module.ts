import { initialState } from './store/states/main.state';
import { reducers } from './store/reducers/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      initialState,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
