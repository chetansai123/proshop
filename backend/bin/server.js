import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import 'express-async-errors';
import { connectDb } from '../connections/db.js';
import productRoutes from "../routes/ProductRoutes.js";
import { corsWitelistOrigin } from '../config/config.js';
import { errorHandler } from '../middlewares/errorMiddleware.js';

connectDb();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors(corsWitelistOrigin));
app.use("/products", productRoutes);

app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`app running successfully on PORT ${PORT}`);
});