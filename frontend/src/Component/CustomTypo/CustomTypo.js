import { Typography } from "@mui/material";
import React from "react";

export default function CustomTypo({ text, align }) {
  return (
    <Typography sx={{ pt: 2, pb: 2 }} variant="subtitle1" align={align}>
      {text}
    </Typography>
  );
}
