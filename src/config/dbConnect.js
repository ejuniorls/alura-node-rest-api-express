import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`);

let db = mongoose.connection;

export default db;