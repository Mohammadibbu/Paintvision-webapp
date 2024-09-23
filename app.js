const express = require("express");
const path = require("path");
const app = express();

// Set view engine to EJS
app.set("view engine", "ejs");

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/cases", (req, res) => {
  res.render("cases");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
app.get("/contacts", (req, res) => {
  res.render("contacts");
});

app.get("/interior", (req, res) => {
  res.render("services/interior", { title: "Interior Painting Services" });
});
app.get("/exterior", (req, res) => {
  res.render("services/exterior", { title: "Exterior Painting Services" });
});

app.get("/color-consultation", (req, res) => {
  res.render("services/color-consultation", {
    title: "Color Consultation Services",
  });
});

app.get("/color-selection", (req, res) => {
  res.render("services/colorSelection", { title: "Choose Your Colors" });
});

app.get("/color-mixing", (req, res) => {
  res.render("services/mixing", { title: "Choose Your Colors" });
});
// Start server
const PORT = process.env.PORT || 2400;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
