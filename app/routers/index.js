import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

router.get("/blog", (req, res) => {
  res.render("blog", { title: "Blog" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact with me" });
});

export default router;