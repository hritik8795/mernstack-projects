import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  //state
  const [input, setInput] = useState({
    name: "",
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
        "http://localhost:4000/api/v1/user/register",
        {
          username: input.name,
          email: input.email,
          password: input.password,
        }
      );
      if (data.success) {
        toast.success("user registered successfully");
        navigate("/login");
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
            Register
          </Typography>
          <TextField
            placeholder="enter your Name"
            value={input.name}
            variant="standard"
            name="name"
            margin="normal"
            onChange={handleChange}
            required
          />
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
            onClick={() => navigate("/login")}
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary"
          >
            Already Registered ? please login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
