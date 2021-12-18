const express = require("express");
const router = express.Router();
const {
    create,
    listAllBlogsCategoriesTags,
    list,
    read,
    remove,
    update,
    photo,
    listRelated,
} = require("../controllers/blog");
const { requireSignin, adminMiddleware } = require("../controllers/auth");

router.post("/blog", requireSignin, adminMiddleware, create);
router.post("/blogs-categories-tags", listAllBlogsCategoriesTags);
router.post("/blogs-categories-tags", listAllBlogsCategoriesTags);
router.get("/blogs", list);
router.get("/blog/photo/:slug", photo);
router.get("/blog/:slug", read);
router.delete("/blog/:slug", requireSignin, adminMiddleware, remove);
router.put("/blog/:slug", requireSignin, adminMiddleware, update);
router.post("/blogs/related", listRelated);

module.exports = router;
