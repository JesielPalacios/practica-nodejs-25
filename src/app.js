import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import iechoRoutes from "./routes/iechoRoutes";

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3001);
app.set("json spaces", 2);

// Middlewares
// const corsOptions = {
//   origin: "http://localhost:3000",
// };
// app.use(cors(corsOptions));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', iechoRoutes);

export default app;
