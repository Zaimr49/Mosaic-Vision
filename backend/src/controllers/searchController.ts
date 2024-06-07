import { Request, Response } from 'express';
import Stock from '../models/Stock';

export const searchStocks = async (req: Request, res: Response) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: 'No search query provided' });
  }

  try {
    const stocks = await Stock.find({ name: { $regex: query, $options: 'i' } });
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};
