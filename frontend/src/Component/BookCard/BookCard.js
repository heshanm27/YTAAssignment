import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { useNavigate } from "react-router";
import { blueGrey } from "@mui/material/colors";

export default function BookCard({ title, isbn, id }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigate(`/book/${id}`)}>
        <CardContent>
          <Stack direction="row">
            <Stack direction="column">
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`ISBN: ${isbn}`}
              </Typography>
            </Stack>
            <Stack
              direction="column"
              sx={{ ml: "auto" }}
              justifyContent="center"
              alignItems="center"
            >
              <Avatar sx={{ bgcolor: blueGrey[500] }}>
                <ReadMoreIcon />
              </Avatar>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
