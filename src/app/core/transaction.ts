import { Injectable } from '@angular/core';
import { ITransactionRepository } from '../model/ITransaction';
import { transactions_list } from '../data/transaction-data';


@Injectable({
  providedIn: 'root'
})
export class TransactionRepository implements ITransactionRepository {
  private transactions: { type: string, amount: number, date: string }[] = transactions_list;
  
  addTransaction(transaction: { type: string, amount: number, date: string }) {
    this.transactions.push(transaction);
  }

  getTransactions() {
    return this.transactions;
  }
}
