// libs
import express from "express";

// configs
const app = express();
const port = 3000;

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));
app.set("view engine", "ejs");
app.set("views", "./view");

// main
app.get("/", (req, res) => {
  res.render("home/home.ejs", { pageCss: "home/home" });
});

// final
app.listen(port, () => {
  console.log("on 3000");
});
