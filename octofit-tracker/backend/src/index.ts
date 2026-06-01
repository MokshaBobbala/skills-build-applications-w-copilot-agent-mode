import express, { json } from "express";
import { connectDb } from "./db";

const app = express();
const PORT = Number(process.env.PORT ?? 8000);

app.use(json());

app.get("/", (_req, res) => {
  res.json({ status: "ok", message: "OctoFit Tracker backend is running" });
});

app.get("/health", (_req, res) => {
  res.json({ status: "healthy" });
});

app.listen(PORT, async () => {
  try {
    await connectDb();
    console.log(`Backend listening on http://localhost:${PORT}`);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
});
