import { TestBed } from "@angular/core/testing";
import { TransactionRepository } from "./transaction.repository";
import { transactions_list } from "../data/transaction-data";

describe('TransactionRepository', () => {
    let transactionRepository: TransactionRepository;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [TransactionRepository],
      });
      transactionRepository = TestBed.inject(TransactionRepository);
    });
  
    it('should be created', () => {
      expect(transactionRepository).toBeTruthy();
    });
  
    it('should return transactions', (done) => {
      transactionRepository.getTransactions().subscribe((transactions) => {
        expect(transactions).toEqual(transactions_list);
        done();
      });
    });
  });
  