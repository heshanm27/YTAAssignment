import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";
export default function NavBar() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar variant="dense">
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Button sx={{ color: "white" }} endIcon={<MenuBookIcon />}>
            Add Author
          </Button>
          <Button sx={{ color: "white" }} endIcon={<PersonIcon />}>
            Add Book
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
