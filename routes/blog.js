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
    listSearch,
    listByUser,
} = require("../controllers/blog");
const {
    requireSignin,
    adminMiddleware,
    authMiddleware,
    canUpdateDeleteBlog,
} = require("../controllers/auth");

router.get("/blogs", list);
router.get("/blog/photo/:slug", photo);
router.get("/blog/:slug", read);
router.post("/blogs-categories-tags", listAllBlogsCategoriesTags);
router.post("/blogs-categories-tags", listAllBlogsCategoriesTags);
router.post("/blogs/related", listRelated);
router.get("/blogs/search", listSearch);
router.get("/:username/blogs", listByUser);

// admin blog crud
router.post("/blog", requireSignin, adminMiddleware, create);
router.delete("/blog/:slug", requireSignin, adminMiddleware, remove);
router.put("/blog/:slug", requireSignin, adminMiddleware, update);

// auth user blog crud
router.post("/user/blog", requireSignin, authMiddleware, create);
router.delete(
    "/user/blog/:slug",
    requireSignin,
    authMiddleware,
    canUpdateDeleteBlog,
    remove
);
router.put(
    "/user/blog/:slug",
    requireSignin,
    authMiddleware,
    canUpdateDeleteBlog,
    update
);

module.exports = router;
