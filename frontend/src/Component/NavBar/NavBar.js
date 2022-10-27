import { AppBar, Button, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";
import CustomeDialog from "../CustomDialog/CustomDialog";
import AuthorForm from "../Form/AuthorForm/AuthorForm";
import BookForm from "../Form/BookForm/BookForm";
export default function NavBar({ setRefetch, setNotify }) {
  const [openBookDialog, setOpenBookDialog] = useState(false);
  const [openAuthorDialog, setOpenAuthorDialog] = useState(false);

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
          <Button
            sx={{ color: "white" }}
            endIcon={<MenuBookIcon />}
            onClick={() => setOpenAuthorDialog(true)}
          >
            Add Author
          </Button>
          <Button
            sx={{ color: "white" }}
            endIcon={<PersonIcon />}
            onClick={() => setOpenBookDialog(true)}
          >
            Add Book
          </Button>
        </Stack>
      </Toolbar>

      <CustomeDialog
        open={openBookDialog}
        setOpen={setOpenBookDialog}
        title="Add New Book "
      >
        <BookForm
          setNotify={setNotify}
          setOpen={setOpenBookDialog}
          setRefetch={setRefetch}
        />
      </CustomeDialog>

      <CustomeDialog
        open={openAuthorDialog}
        setOpen={setOpenAuthorDialog}
        title="Add New Author"
      >
        <AuthorForm
          setNotify={setNotify}
          setOpen={setOpenAuthorDialog}
          setRefetch={setRefetch}
        />
      </CustomeDialog>
    </AppBar>
  );
}
