import dotenv from "dotenv"
import { Product, Order, User } from "../models/index.js";
import products from "./products.js";
import users from "./users.js";
import colors from "colors";
import { connectDb } from "../connections/db.js";

dotenv.config();
connectDb();
const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]?._id;

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };
        });
        const createdProducts = await Product.insertMany(sampleProducts);
        console.log("importedData Successfully".green.inverse);
        process.exit();
    } catch (error) {
        console.log("Error Occured".red, error);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Destoyed Data Successfully".red);
        process.exit();
    } catch (error) {
        console.log("Error Occured".red.trap, error);
        process.exit(1);
    }
}

if (process.argv && process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}