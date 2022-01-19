const express = require("express");
const router = express.Router();
const { contactForm, contactBlogForm } = require("../controllers/form");

// validators
const { runValidation } = require("../validators");
const { contactFromValidator } = require("../validators/form");

router.post("/contact", contactFromValidator, runValidation, contactForm);
router.post("/contact-blog-author", contactFromValidator, runValidation, contactBlogForm);

module.exports = router;
