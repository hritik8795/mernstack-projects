import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/store";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(input);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        {
          email: input.email,
          password: input.password,
        }
      );
      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        dispatch(authActions.login());
        toast.success("user Login successfully");
        navigate("/blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          borderRadius={5}
        >
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase" }}
            padding={3}
            textAlign="center"
          >
            Login
          </Typography>
          <TextField
            label="enter your Email"
            value={input.email}
            variant="standard"
            margin="normal"
            onChange={handleChange}
            name="email"
            required
          />
          <TextField
            label="enter your password"
            value={input.password}
            variant="standard"
            name="password"
            onChange={handleChange}
            margin="normal"
            type={"password"}
            required
          />
          <Button
            type="submit"
            margin="normal"
            variant="contained"
            color="primary"
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Submit
          </Button>
          <Button
            onClick={() => navigate("/register")}
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary"
          >
            New at this place ? please register
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
