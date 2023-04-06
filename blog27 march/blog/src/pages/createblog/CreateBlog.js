// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
// const CreateBlog = () => {
//   const { id } = localStorage.getItem("userId");
//   const navigate = useNavigate();
//   const [inputs, setinputs] = useState({
//     title: "",
//     description: "",
//     image: "",
//   });
//   const handleChange = (e) => {
//     setinputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/blog/create-blog",
//         {
//           title: inputs.title,
//           description: inputs.description,
//           image: inputs.image,
//           user: id,
//         }
//       );
//       if (data?.success) {
//         alert("blog is created");
//         navigate("/my-blogs");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <Box
//           width={"50%"}
//           border={3}
//           borderRadius={10}
//           padding={3}
//           margin="auto"
//           boxShadow={"10px 10px 20px #ccc"}
//           display="flex"
//           flexDirection={"column"}
//           marginTop="30px"
//         >
//           <Typography
//             varient="h2"
//             textAlign={"center"}
//             fontWeight="bold"
//             padding={3}
//             color="gray"
//           >
//             Create a post
//           </Typography>
//           <InputLabel
//             sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
//           >
//             Title
//           </InputLabel>
//           <TextField
//             name="title"
//             value={inputs.title}
//             onChange={handleChange}
//             variant="standard"
//             margin="normal"
//             required
//           />

//           <InputLabel
//             sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
//           >
//             Description
//           </InputLabel>
//           <TextField
//             name="description"
//             value={inputs.description}
//             onChange={handleChange}
//             variant="standard"
//             margin="normal"
//             required
//           />
//           <InputLabel
//             sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
//           >
//             Image Url
//           </InputLabel>
//           <TextField
//             name="image"
//             value={inputs.image}
//             onChange={handleChange}
//             variant="standard"
//             margin="normal"
//             required
//           />
//           <Button type="submit" variant="contained" color="secondary">
//             Add blog
//           </Button>
//         </Box>
//       </form>
//     </>
//   );
// };

// export default CreateBlog;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";
const CreateBlog = () => {
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });
  // input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/blog/create-blog",
        {
          title: inputs.title,
          description: inputs.description,
          image: inputs.image,
          user: id,
        }
      );
      if (data?.success) {
        toast.success("Blog Created");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          width={"50%"}
          border={3}
          borderRadius={10}
          padding={3}
          margin="auto"
          boxShadow={"10px 10px 20px #ccc"}
          display="flex"
          flexDirection={"column"}
          marginTop="30px"
        >
          <Typography
            variant="h2"
            textAlign={"center"}
            fontWeight="bold"
            padding={3}
            color="gray"
          >
            Create A Pots
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            variant="standard"
            margin="normal"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Description
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            variant="standard"
            margin="normal"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Image Url
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
            variant="standard"
            margin="normal"
            required
          />
          <Button type="submit" color="secondary" variant="contained">
            SUBMIT
          </Button>
        </Box>
      </form>
    </>
  );
};

export default CreateBlog;
