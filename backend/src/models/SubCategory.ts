import mongoose, { Document, Schema } from 'mongoose';

interface ISubCategory extends Document {
  title: string;
  category: string;
}

const SubCategorySchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
  },
});

export default mongoose.model<ISubCategory>('SubCategory', SubCategorySchema);
