import { AppBar, Button, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <Button>Add Author</Button>
          <Button>Add Book</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
