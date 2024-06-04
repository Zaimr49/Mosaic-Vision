import express from "express";
import {
  createStock,
  getStocks,
  getStockById,
  updateStock,
  deleteStock,
  getStocksBySubCategory,
} from "../controllers/stockController";
import authentication from "../middleware/authentication";

const router = express.Router();

router
  .route("/")
  .post(authentication, createStock) // Create a new stock
  .get(authentication, getStocks); // Get all stocks

router
  .route("/:id")
  .get(authentication, getStockById) // Get a stock by ID
  .put(authentication, updateStock) // Update a stock by ID
  .delete(authentication, deleteStock); // Delete a stock by ID

router
  .route("/subcategory/:subCategory")
  .get(authentication, getStocksBySubCategory); // Get stocks by subcategory

export default router;
