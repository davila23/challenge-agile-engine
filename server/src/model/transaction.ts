export interface Transaction {
  id?: number | string
  type: TransactionType;
  amount: number;
  date: Date;
  balance : number
}

type TransactionType = 'DEBIT' | 'CREDIT'

