import { Request, Response } from 'express';

export const testFunction = (req: Request, res: Response): void => {
  try {
    console.log("In testFunction");
    res.status(200).json({ message: 'Connected Frontend to Backend successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
