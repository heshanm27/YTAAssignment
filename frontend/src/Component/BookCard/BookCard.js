import {
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

export default function BookCard({ title, isbn }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
              <IconButton color="primary" aria-label="next">
                <ReadMoreIcon />
              </IconButton>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
