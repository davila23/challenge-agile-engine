import { Transaction } from '../model/transaction';
import { ID_NOT_FOUND } from "../commons/utils";

/* --- Simulate a Real database operations. ---  */

class db {

    public isProcessing = false;

    private _transactions: Transaction[] = [];

    public async add(data: Transaction): Promise<void> {

        // IMPORTANT : To test the crash, I add a delay that simulates the database processing time.

        console.log('Start  =====> isProcessing')

        this.isProcessing = true;

        await new Promise(res => setTimeout(res, 5000))

        console.log(data);

        this.isProcessing = false;

        console.log('Finish =====> isProcessing')

        this._transactions.push({ ...data });

        return;
    }

    public get(id: string): Transaction {

        let transaction = this._transactions.find(item => item.id === id)

        if (!transaction) throw new Error(ID_NOT_FOUND)

        return transaction;
    }

    public getAll(): Transaction[] {
        return this._transactions;
    }

    public get balance(): number {
        return this.getAll().reduce((sum, transaction) => sum += transaction.type === 'DEBIT' ? transaction.amount : -transaction.amount, 0) || 0;
    }
}

export default new db();









