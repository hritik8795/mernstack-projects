import React, { useState, useEffect } from "react";
import axios from "axios";

import BlogCard from "../../components/blogCard/BlogCard";
const Blog = () => {
  const [blogs, setblog] = useState();
  //get blog
  const getAllBlog = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/blog/all-blog"
      );
      if (data?.success) {
        setblog(data && data.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlog();
  }, []);
  return (
    <div className="card">
      {blogs &&
        blogs.map((vlog) => {
          return (
            <BlogCard
              id={vlog?._id}
              isUser={localStorage.getItem("userId") === vlog?.user?._id}
              title={vlog?.title}
              description={vlog?.description}
              image={vlog?.image}
              username={vlog?.user?.username}
              time={vlog?.createdAt}
            />
          );
        })}
    </div>
  );
};

export default Blog;
