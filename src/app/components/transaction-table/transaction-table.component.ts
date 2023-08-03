import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent {
  @Input() transactions: { type: string; amount: number; date: string }[] = [];

  reportAmount: number = 0;
  reportForDate: string = '';
  pieChartData = this.chartService.createChart(0,0);
  @Output() update: EventEmitter<{ reportForDate: string, pieChartData: any }> = new EventEmitter();

  constructor(private chartService: ChartService) {}

  seeExpenses(date: string): void {
    const transactionsForDate = this.transactions.filter(
      (transaction) => transaction.date === date
    );

    const totalDebit = transactionsForDate
      .filter((t) => t.type === 'debit')
      .reduce((total, transaction) => total + transaction.amount, 0);

    const totalCredit = transactionsForDate
      .filter((t) => t.type === 'credit')
      .reduce((total, transaction) => total + transaction.amount, 0);

    this.reportForDate = date;
    this.pieChartData = this.chartService.createChart(totalCredit, totalDebit);

    this.update.emit({ reportForDate: this.reportForDate, pieChartData: this.pieChartData });
  }


}
