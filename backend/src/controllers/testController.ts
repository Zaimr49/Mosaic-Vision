import { Request, Response } from 'express';
import {backend_version} from '../Constant';

export const testFunction = (req: Request, res: Response): void => {
  try {
    console.log("In testFunction");
    res.status(200).json({ message: `V ${backend_version}` });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
