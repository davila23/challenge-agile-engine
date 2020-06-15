import { Request, Response, NextFunction } from 'express';
import moment from 'moment';
import colors from 'colors';

const logger = (req: Request, res: Response, next: NextFunction) => {
 console.log( colors.cyan(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()}`));
  next();
};

export default logger;
