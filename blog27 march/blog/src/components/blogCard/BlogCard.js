import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./BlogCard.css";
export default function BlogCard({
  title,
  description,
  image,
  username,
  time,
  id,
  isUser,
}) {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/blog-details/${id}`);
  };
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/blog/delete-blog/${id}`
      );
      if (data?.success) {
        toast.success("Blog deleted successfully");
        // navigate("/my-blogs");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cards">
      <Card
        sx={{
          width: "25%",
          margin: "30px",

          boxShadow: "5px 6px 10px #ccc",
          ":hover:": { boxShadow: "10px 10px 20px #ccc" },
        }}
      >
        {isUser && (
          <Box>
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon onClick={handleDelete} />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {username}
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={username}
          subheader={time}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography varient="h6" color="text-.secondary">
            title:{title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description :{description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
