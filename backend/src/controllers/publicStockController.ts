import { Request, Response } from 'express';
import Stock from '../models/Stock';

// Get stocks by subcategory
export const getStocksBySubCategory = async (req: Request, res: Response) => {
    const { subCategory } = req.params;
    try {
      const stocks = await Stock.find({ subCategory });
      if (stocks.length === 0) {
        return res.status(404).json({ message: 'No stocks found for this subcategory' });
      }
      res.status(200).json(stocks);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
    }
  };
  
  // Get a stock by ID
  export const getStockById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const stock = await Stock.findById(id);
      if (!stock) {
        return res.status(404).json({ message: 'Stock not found' });
      }
      res.status(200).json(stock);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
    }
  };