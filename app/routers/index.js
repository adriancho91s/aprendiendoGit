import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "Blog" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact with me" });
});

export default router;