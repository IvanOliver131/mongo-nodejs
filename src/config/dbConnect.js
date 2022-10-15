import mongoose from "mongoose";

mongoose.connect(process.env.URL_DATABASE_CONNECTION);

const db = mongoose.connection;

export default db;
