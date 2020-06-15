import { Request, Response, NextFunction } from 'express';
import { LOCK_DB } from '../commons/utils';

import db from '../database/database';

const logger = (req: Request, res: Response, next: NextFunction) => {

    if (db.isProcessing) {
        res.status(400).send(LOCK_DB);
    } else {
        next();
    }
}

export default logger;