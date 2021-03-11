import express from "express";
import { adminCheck, authProtect } from "../middleware/authMiddleware.js";
import {
  getAllProducts,
  getProductsByCategory,
  getProductsByCategoryAndId,
  createProductReview,
  createSampleProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router
  .route("/")
  .get(getAllProducts)
  .post(authProtect, adminCheck, createSampleProduct); // for admin user

router.route("/:category").get(getProductsByCategory); // not used

router
  .route("/:category/:id")
  .get(getProductsByCategoryAndId)
  .delete(authProtect, adminCheck, deleteProduct); // for admin user
router.route("/:category/:id/reviews").post(authProtect, createProductReview);

export default router;
