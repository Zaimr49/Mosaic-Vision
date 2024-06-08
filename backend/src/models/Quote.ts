import mongoose, { Document, Schema } from 'mongoose';

interface IQuote extends Document {
  fullName: string;
  phoneNo: string;
  emailAddress: string;
  quantity: number;
  color: string;
  productName: string;
  dimensions: {
    length: mongoose.Types.Decimal128;
    width: mongoose.Types.Decimal128;
    depth: mongoose.Types.Decimal128;
    unit: string;
  };
  message: string;
}

const QuoteSchema: Schema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide your full name'],
  },
  phoneNo: {
    type: String,
    required: [true, 'Please provide your phone number'],
  },
  emailAddress: {
    type: String,
    required: [true, 'Please provide your email address'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please provide the quantity'],
  },
  color: {
    type: String,
    required: [true, 'Please provide the color'],
  },
  productName: {
    type: String,
    required: [true, 'Please provide the product name'],
  },
  dimensions: {
    length: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, 'Please provide the length'],
    },
    width: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, 'Please provide the width'],
    },
    depth: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, 'Please provide the depth'],
    },
    unit: {
      type: String,
      enum: ['inch', 'cm'],
      required: [true, 'Please provide the unit (inch or cm)'],
    },
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
  },
});

export default mongoose.model<IQuote>('Quote', QuoteSchema);
