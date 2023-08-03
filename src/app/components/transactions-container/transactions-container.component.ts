import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-transactions-container',
  templateUrl: './transactions-container.component.html',
  styleUrls: ['./transactions-container.component.scss']
})
export class TransactionsContainerComponent implements OnInit {
  transactions: { type: string; amount: number; date: string }[] = [];

  reportForDate: string = '';
  pieChartData = this.chartService.createChart(0,0);

  constructor(private financeService: FinanceService,
    private chartService: ChartService) {}

  ngOnInit(): void {
    this.financeService.getTransactions().subscribe({
      next: (result) => {
        this.transactions = result;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  handleReportData(data: { reportForDate: string, pieChartData: any }): void {
    this.reportForDate = data.reportForDate;
    this.pieChartData = data.pieChartData;
  }
 
}
