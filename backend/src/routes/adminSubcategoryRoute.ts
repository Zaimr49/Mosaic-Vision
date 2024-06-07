import express from "express";
import {
  createSubCategory,
  getSubCategories,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
  getSubCategoriesByCategory
} from "../controllers/subCategoryController";

const router = express.Router();

router
  .route("/")
  .post(createSubCategory) // Create a new subcategory
  .get(getSubCategories); // Get all subcategories

router
  .route("/:id")
  .get(getSubCategoryById) // Get a subcategory by ID
  .put(updateSubCategory) // Update a subcategory by ID
  .delete(deleteSubCategory); // Delete a subcategory by ID

router
  .route("/category/:category")
  .get(getSubCategoriesByCategory); // Get subcategories by category

export default router;
