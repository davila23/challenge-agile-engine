import express from 'express';

const router = express.Router();

import TransactionsController from '../controllers/transactionsController';

// Transactions Routes
router.get('/transactions', TransactionsController.getAllTransaction);
router.post('/transactions', TransactionsController.addTransaction);
router.get('/transactions/:id', TransactionsController.getTransactionByid);

export default router;






