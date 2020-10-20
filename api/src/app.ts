import express, { Application } from "express";
import Auth from "./routes/auth";
import morgan from "morgan";

const app: Application = express();

//settings
app.set("port", 4000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/auth", Auth);

export default app;
