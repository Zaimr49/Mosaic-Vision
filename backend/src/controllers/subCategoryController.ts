import { Request, Response } from 'express';
import SubCategory from '../models/SubCategory';

// Create a new subcategory
export const createSubCategory = async (req: Request, res: Response) => {
  const { title, category } = req.body;
  try {
    const newSubCategory = new SubCategory({ title, category });
    await newSubCategory.save();
    res.status(201).json(newSubCategory);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Get all subcategories
export const getSubCategories = async (req: Request, res: Response) => {
  try {
    const subCategories = await SubCategory.find();
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Get a subcategory by ID
export const getSubCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const subCategory = await SubCategory.findById(id);
    if (!subCategory) {
      return res.status(404).json({ message: 'SubCategory not found' });
    }
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Update a subcategory by ID
export const updateSubCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, category } = req.body;
  try {
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(id, { title, category }, { new: true });
    if (!updatedSubCategory) {
      return res.status(404).json({ message: 'SubCategory not found' });
    }
    res.status(200).json(updatedSubCategory);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Delete a subcategory by ID
export const deleteSubCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedSubCategory = await SubCategory.findByIdAndDelete(id);
    if (!deletedSubCategory) {
      return res.status(404).json({ message: 'SubCategory not found' });
    }
    res.status(200).json({ message: 'SubCategory deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};


// Get subcategories by category
export const getSubCategoriesByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;
  try {
    const subCategories = await SubCategory.find({ category });
    if (subCategories.length === 0) {
      return res.status(404).json({ message: 'No subcategories found for this category' });
    }
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};