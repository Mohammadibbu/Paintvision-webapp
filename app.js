const express = require("express");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

// Ensure the uploads directory exists
const ensureUploadsDirectory = () => {
  const dir = path.join(__dirname, 'uploads');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log('Uploads directory created:', dir);
  }
};
ensureUploadsDirectory();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  }
});
const upload = multer({ storage: storage });

// Middleware
app.use(express.static('uploads')); // Serve the uploads directory
app.use(bodyParser.urlencoded({ extended: true }));

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

<<<<<<< HEAD
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
=======
// Route to render the upload page
app.get('/upload', (req, res) => {
  res.render('upload');
});

app.post('/upload', upload.single('wallImage'), (req, res) => {
  const imagePath = `/uploads/${req.file.filename}`;
  console.log('Uploaded image path:', imagePath); // Log the path for debugging
  res.json({ imagePath });
});


>>>>>>> b479a0a (update)
// Start server
const PORT = process.env.PORT || 2400;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
