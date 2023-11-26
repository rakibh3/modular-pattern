import express, { Application, Request, Response } from "express";
import cors from "cors";

// Create Express app
const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

// Route handler for GET requests to /
app.get("/", (req: Request, res: Response) => {
  // Send response text
  res.send("Hello Express JS!");
});

export default app;
