import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-transactions-container',
  templateUrl: './transactions-container.component.html',
  styleUrls: ['./transactions-container.component.scss']
})
export class TransactionsContainerComponent implements OnInit {
  transactions: { type: string; amount: number; date: string }[] = [];

  reportForDate: string | null = null;
  reportAmount: number | null = null;

  pieChartOptions: ChartOptions = {
    responsive: true,
  };
  pieChartType: ChartType = 'pie';

  pieChartData = this.createChart(0,0);

  constructor(private financeService: FinanceService) {}

  ngOnInit(): void {
    this.transactions = this.financeService.getTransactions();
  }

  seeReport(date: string): void {
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
    this.pieChartData = this.createChart(totalCredit, totalDebit);
  }

  createChart(v1: number, v2: number) {
    return {
      type: 'pie',
      labels: ['Debit', 'Credit'],
      datasets: [{
        data: [v1, v2],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ],
        hoverOffset: 4
      }]
    };
  }
}
