
import { Request, Response } from 'express';
import uuid from 'uuid';
import { WITOUT_FOUNDS, WRONG_TYPE, AMOUNT_NEGATIVE } from "../commons/utils";

import db from '../database/database';
import { Transaction } from '../model/transaction';

export default class TransactionsController {

    public static getAllTransaction(req: Request, res: Response) {
        res.send(db.getAll());
    }

    public static getTransactionByid(req: Request, res: Response) {
        const id = req.params.id;
        res.send(db.get(id));
    }

    public static addTransaction(req: Request, res: Response) {

        // Exeption Negative Case
        if (req.body.amount < 0) res.status(400).send(AMOUNT_NEGATIVE);

        // Exeption Type Case
        if (req.body.type.toUpperCase() !== 'DEBIT' && req.body.type.toUpperCase() !== 'CREDIT') res.status(400).send(WRONG_TYPE);

        const newTrasaction: Transaction = {
            id: uuid.v4(),
            type: req.body.type.toUpperCase(),
            amount: req.body.amount,
            date: new Date(),
            balance: 0
        }


        switch (newTrasaction.type) {
            case 'DEBIT':
                newTrasaction.balance = db.balance + newTrasaction.amount;
                db.add(newTrasaction);
                res.status(200).send(newTrasaction)
                break;

            case 'CREDIT':

                if (db.balance - newTrasaction.amount > 0) {
                    newTrasaction.balance = db.balance - newTrasaction.amount;
                    db.add(newTrasaction);
                    res.status(200).send(newTrasaction)
                    break;
                }
                else {
                    res.status(400).send(WITOUT_FOUNDS);
                    break;
                }

            default:
                res.status(400).send(WRONG_TYPE)
                break;
        }
        res.send();
    }
}



