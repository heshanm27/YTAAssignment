import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useRef, useState } from "react";
import { publicRequest } from "../../../Axios/DefaultAxios";

export default function AuthorForm({ author, setNotify, setOpen }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validate()) {
    const author = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
    };
    try {
      const { data } = publicRequest.post("author", author);
      console.log(data);
      setNotify({
        isOpen: true,
        message: "Author added successfully",
        type: "success",
        title: "Success",
      });
      setOpen(false);
    } catch (err) {
      setNotify({
        isOpen: true,
        message: "Author not added",
        type: "error",
        title: "Error",
      });
    }

    // }
  };

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

          <Button type="submit">Add Author</Button>
        </Stack>
      </form>
    </Container>
  );
}
