import express, { Application} from 'express';
import logger from './middleware/logger';
import middleware from './middleware/middleware';
import transactions from './routes/transactionsRoute';
import {PORT}from './commons/utils';
import cors from 'cors';

const app: Application = express();

// Init middleware
app.use(logger);
app.use(middleware);

// Cors
app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Transactions API Routes
app.use('/api', transactions);
 
// Start Server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
