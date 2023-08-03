import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionsContainerComponent } from './transactions-container.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [TransactionsContainerComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    NgChartsModule
  ]
})
export class TransactionModule { }
