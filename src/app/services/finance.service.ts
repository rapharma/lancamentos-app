import { Inject, Injectable } from "@angular/core";
import { ITransactionRepository } from "../model/transaction-repository";
import { TransactionRepository } from "../core/transaction.repository";

@Injectable({
    providedIn: 'root'
})
export class FinanceService {
    constructor(@Inject(TransactionRepository) private repository: ITransactionRepository) { }

    getTransactions() {
        return this.repository.getTransactions();
    }
}
