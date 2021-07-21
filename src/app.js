import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import indexRoutes from "./routes";

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3001);
app.set("json spaces", 2);

// Middlewares
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', indexRoutes);

export default app;
