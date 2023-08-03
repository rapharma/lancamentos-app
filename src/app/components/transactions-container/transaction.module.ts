import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionsContainerComponent } from './transactions-container.component';
import { NgChartsModule } from 'ng2-charts';
import { TransactionTableComponent } from '../transaction-table/transaction-table.component';
import { ChartComponent } from '../chart/chart.component';
@NgModule({
  declarations: [TransactionsContainerComponent, 
    TransactionTableComponent,
    ChartComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    NgChartsModule
  ]
})
export class TransactionModule { }
