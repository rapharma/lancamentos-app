import { Injectable } from '@angular/core';
import { ITransactionRepository } from '../model/transaction-repository';
import { transactions_list } from '../data/transaction-data';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionRepository implements ITransactionRepository {

  getTransactions(): Observable<{ type: string, amount: number, date: string }[]> {
    return of(transactions_list).pipe(delay(1000));
  }
}
