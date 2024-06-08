import { Request, Response } from 'express';
import Quote from '../models/Quote'; 

export const submitQuote = async (req: Request, res: Response): Promise<void> => {
  try {
    const newQuote = new Quote(req.body);
    await newQuote.save();
    res.status(201).send({ message: 'Quote submitted successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error submitting quote', error });
  }
};
