import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import connectDB from "./config/db.js";
import swaggerDocument from "./swagger.json" assert { type: "json" };
import bookRoutes from "./routes/books.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Swagger setup
app.use("/explorer", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/explorer`);
});
