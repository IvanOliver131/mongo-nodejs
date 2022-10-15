import "dotenv/config";
import cors from "cors";
import express from "express";
import db from "./config/dbConnect.js";
import router from "./routes/index.js";

db.on("error", console.log.bind(console, "Error connection"));
db.once("open", () => {
  console.log("Database connection successful ✨");
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

export default app;
