import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { authActions } from "../../redux/store";
const Navbar = () => {
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(isLogin);
  const [value, setvalue] = useState();
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("logout successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {}
  };
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">myBlog app</Typography>

          {isLogin && (
            <box display={"flex"} marginLeft="auto" marginRight={"auto"}>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setvalue(val)}
              >
                <Tab label="Blogs" LinkComponent={Link} to="/blog" />
                <Tab label="My Blog" LinkComponent={Link} to="/my-blogs" />
                <Tab
                  label="create-blog"
                  LinkComponent={Link}
                  to="/create-blog"
                />
              </Tabs>
            </box>
          )}
          <Box display={"flex"} marginLeft="auto">
            {!isLogin && (
              <Button
                sx={{ margin: 1, color: "white" }}
                LinkComponent={Link}
                to="/login"
              >
                Login
              </Button>
            )}
            <Button
              sx={{ margin: 1, color: "white" }}
              LinkComponent={Link}
              to="/register"
            >
              Register
            </Button>
            {isLogin && (
              <Button onClick={handleLogout} sx={{ margin: 1, color: "white" }}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
