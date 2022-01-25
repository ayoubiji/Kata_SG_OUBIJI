import { RetrieveComponent } from './features/retrieve/retrieve.component';
import { OperationsComponent } from './features/operations/operations.component';
import { SaveMoneyComponent } from './features/save-money/save-money.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SaveMoneyComponent },
  { path: 'retrieve', component: RetrieveComponent },
  { path: 'operations', component: OperationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
