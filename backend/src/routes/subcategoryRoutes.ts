import express from "express";
import {
  createSubCategory,
  getSubCategories,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
  getSubCategoriesByCategory
} from "../controllers/subCategoryController";
import authentication from "../middleware/authentication";

const router = express.Router();

router
  .route("/")
  .post(authentication, createSubCategory) // Create a new subcategory
  .get(authentication, getSubCategories); // Get all subcategories

router
  .route("/:id")
  .get(authentication, getSubCategoryById) // Get a subcategory by ID
  .put(authentication, updateSubCategory) // Update a subcategory by ID
  .delete(authentication, deleteSubCategory); // Delete a subcategory by ID

router
  .route("/category/:category")
  .get(authentication, getSubCategoriesByCategory); // Get subcategories by category

export default router;
