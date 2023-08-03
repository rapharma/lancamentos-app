import { Observable } from "rxjs";

export interface ITransactionRepository {
  getTransactions(): Observable<{ type: string, amount: number, date: string }[]>;
}