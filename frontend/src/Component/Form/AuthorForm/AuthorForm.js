import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { publicRequest } from "../../../Axios/DefaultAxios";

export default function AuthorForm({ author, setNotify, setOpen, setRefetch }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const [error, setErrors] = useState(false);

  const validate = () => {
    let temp = {};
    temp.firstName =
      firstNameRef.current.value === ""
        ? "Please enter first name of author"
        : "";
    temp.lastName =
      lastNameRef.current.value === ""
        ? "Please enter last name of author"
        : "";

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const handleInsertNewAuthor = async (newAuthor) => {
    try {
      const { data } = await publicRequest.post("author", newAuthor);
      console.log(data);
      setNotify({
        isOpen: true,
        message: "Author added successfully",
        type: "success",
        title: "Success",
      });
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      setOpen(false);
      setRefetch(true);
    } catch ({ response }) {
      setNotify({
        isOpen: true,
        message: response.data.msg,
        type: "error",
        title: "Error",
      });
    }
  };

  const handleUpdateAuthor = async (newAuthor) => {
    try {
      const { data } = await publicRequest.put(
        `author/${author._id}`,
        newAuthor
      );
      console.log(data);
      setNotify({
        isOpen: true,
        message: "Author updated successfully",
        type: "success",
        title: "Success",
      });
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      setOpen(false);
      setRefetch(true);
    } catch ({ response }) {
      setNotify({
        isOpen: true,
        message: response.data.msg,
        type: "error",
        title: "Error",
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const newAuthor = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
      };

      if (author) {
        console.log("update");
        handleUpdateAuthor(newAuthor);
      } else {
        console.log("insert");
        handleInsertNewAuthor(newAuthor);
      }
    }
  };

  useEffect(() => {
    if (author) {
      firstNameRef.current.value = author.firstName;
      lastNameRef.current.value = author.lastName;
    }
  }, [author]);
  console.log(author);
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <TextField
            fullWidth
            id="outlined-required"
            label="First Name"
            helperText={
              error.firstName ? error.firstName : "Enter author first name"
            }
            error={error.firstName ? true : false}
            inputRef={firstNameRef}
          />
          <TextField
            id="outlined-required"
            label="Last Name"
            fullWidth
            helperText={
              error.lastName ? error.lastName : "Enter author first name"
            }
            error={error.lastName ? true : false}
            inputRef={lastNameRef}
          />

          {author ? (
            <Button type="submit">Update Author</Button>
          ) : (
            <Button type="submit">Add Author</Button>
          )}
        </Stack>
      </form>
    </Container>
  );
}
