import express from "express";
import {
  createStock,
  getStocks,
  getStockById,
  updateStock,
  deleteStock,
  getStocksBySubCategory,
} from "../controllers/stockController";

const router = express.Router();

router
  .route("/")
  .post(createStock) // Create a new stock
  .get(getStocks); // Get all stocks

router
  .route("/:id")
  .get(getStockById) // Get a stock by ID
  .put(updateStock) // Update a stock by ID
  .delete(deleteStock); // Delete a stock by ID

router
  .route("/subcategory/:subCategory")
  .get(getStocksBySubCategory); // Get stocks by subcategory

export default router;
