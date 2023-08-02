export interface ITransactionRepository {
  addTransaction(transaction: { type: string, amount: number, date: string }): void;
  getTransactions(): { type: string, amount: number, date: string }[];
}