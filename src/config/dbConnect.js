import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://alura:123@alura.o0mafs1.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

export default db;
