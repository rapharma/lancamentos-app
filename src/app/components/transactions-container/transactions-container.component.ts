import { Component } from '@angular/core';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-transactions-container',
  templateUrl: './transactions-container.component.html',
  styleUrls: ['./transactions-container.component.scss']
})
export class TransactionsContainerComponent {
  transactions = new Array<{ type: string, amount: number, date: string }>();

  constructor(
    private financeService: FinanceService
  ) { }

  ngOnInit(): void {
    this.transactions = this.financeService.getTransactions();
  }
}
