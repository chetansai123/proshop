import { Router } from "express";
import * as ProductsController from "../controllers/ProductsController.js";

const router = Router();

router.get("/", ProductsController.getProducts);
router.get("/:id", ProductsController.getProduct);
export default router;