import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../../components/blogCard/BlogCard";

const Userblog = () => {
  const [blogs, setblogs] = useState([]);
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      console.log(id);
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/blog/user-blog/${id}`
      );
      if (data?.success) {
        setblogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserBlogs();
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs && blogs.length > 0 ? (
        blogs.map((vlog) => {
          return (
            <BlogCard
              id={blogs._id}
              isUser={true}
              title={vlog.title}
              description={vlog.description}
              image={vlog.image}
              username={vlog.user.username}
              time={vlog.createdAt}
            />
          );
        })
      ) : (
        <h1>you never create a blog please became a creater</h1>
      )}
    </div>
  );
};

export default Userblog;
