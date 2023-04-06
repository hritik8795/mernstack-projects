const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogController,
} = require("../controllers/blogController");

//router object

const router = express.Router();

//routeds
//get||All blogs

router.get("/all-blog", getAllBlogsController);

//post ||create-blog

router.post("/create-blog", createBlogController);

//put ||update-blog

router.put("/update-blog/:id", updateBlogController);

// jab hum kisi blog ko open kaenge to use id se call karenge

//get || single blog detail
router.get("/get-blog/:id", getBlogByIdController);

//Delete ||delete blog

router.delete("/delete-blog/:id", deleteBlogController);

//GET || user blog
router.get("/user-blog/:id", userBlogController);

module.exports = router;
