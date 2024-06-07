import express from "express";
import {
  getStocksBySubCategory,getStockById
} from "../controllers/publicStockController";

const router = express.Router();

router
  .route("/subcategory/:subCategory")
  .get(getStocksBySubCategory);

  router.get("/:id", getStockById);
export default router;
