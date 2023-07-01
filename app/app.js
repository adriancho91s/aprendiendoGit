import express from "express";
import morgan from "morgan";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Tailwindcss
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["assets/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

// Routes
import indexRoutes from "./app/routers/index.js";

// Initialize express
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", join(__dirname, "pages"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));

// routes
app.use(indexRoutes);

// static files
app.use(express.static(join(__dirname, "assets")));

// listening the Server
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
