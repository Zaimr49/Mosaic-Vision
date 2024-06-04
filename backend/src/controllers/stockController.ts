import { Request, Response } from 'express';
import Stock from '../models/Stock';

// Create a new stock
export const createStock = async (req: Request, res: Response) => {
  const { name, description, images, category, subCategory } = req.body;
  try {
    const newStock = new Stock({ name, description, images, category, subCategory });
    await newStock.save();
    res.status(201).json(newStock);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Get all stocks
export const getStocks = async (req: Request, res: Response) => {
  try {
    const stocks = await Stock.find();
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

// Update a stock by ID
export const updateStock = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, images, category, subCategory } = req.body;
  try {
    const updatedStock = await Stock.findByIdAndUpdate(id, { name, description, images, category, subCategory }, { new: true });
    if (!updatedStock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.status(200).json(updatedStock);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Delete a stock by ID
export const deleteStock = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedStock = await Stock.findByIdAndDelete(id);
    if (!deletedStock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.status(200).json({ message: 'Stock deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};


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