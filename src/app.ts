import express from "express";
import router from "./api/router";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("server is running");
});

app.use("/api", router);

app.use(
  (
    error: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error("Error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
        type: "validation_error",
      });
    }

    if (error.name === "ZohoAPIError") {
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
        type: "zoho_api_error",
      });
    }

    const statusCode = error.statusCode || error.status || 500;
    const message = error.message || "Internal server error";

    res.status(statusCode).json({
      success: false,
      message,
      type: "server_error",
      ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
    });
  }
);
// 404 handler - catch all unmatched routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    type: "not_found",
  });
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
