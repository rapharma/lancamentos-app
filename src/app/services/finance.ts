import { Injectable } from "@angular/core";
import { ITransactionRepository } from "../model/ITransaction";

@Injectable({
    providedIn: 'root'
})
export class FinanceService {
    constructor(private repository: ITransactionRepository) { }

    addTransaction(transaction: { type: string, amount: number, date: string }) {
        this.repository.addTransaction(transaction);
    }

    getTransactions() {
        return this.repository.getTransactions();
    }
}
