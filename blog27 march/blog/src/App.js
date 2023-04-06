import "./App.css";
import Header from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Register from "./pages/signup/Register";
import Userblog from "./pages/userBlog/userblog";
import CreateBlog from "./pages/createblog/CreateBlog";
import BlogDetail from "./pages/BlogDetail.js/BlogDetail";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/my-blogs" element={<Userblog />} />
        <Route path="/create-blog" element={<CreateBlog />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog-details/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
