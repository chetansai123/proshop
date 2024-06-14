import mongoose from "mongoose";
import colors from 'colors'

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected `.green, conn.connection.name);
    } catch (err) {
        console.log("MongoDb connection error :".red.inverse, err);
        process.exit(1);
    }

}