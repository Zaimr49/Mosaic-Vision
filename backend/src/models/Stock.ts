import mongoose, { Document, Schema } from 'mongoose';

interface IStock extends Document {
  name: string;
  description: string;
  images: string[];
  category: string;
  subCategory: string;
}

const StockSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a stock name'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a stock description'],
  },
  images: {
    type: [String], 
    required: [true, 'Please provide stock images'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a stock category'],
  },
  subCategory: {
    type: String,
    required: [true, 'Please provide a stock subcategory'],
  },
});

export default mongoose.model<IStock>('Stock', StockSchema);
