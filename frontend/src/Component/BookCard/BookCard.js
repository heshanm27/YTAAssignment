import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";

export default function BookCard({ title, isbn }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`ISBN: ${isbn}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
