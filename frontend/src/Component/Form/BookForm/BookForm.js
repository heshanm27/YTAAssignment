import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { publicRequest } from "../../../Axios/DefaultAxios";

export default function BookForm({ book, setNotify, setOpen }) {
  const bookTitleRef = useRef();
  const bookISBNRef = useRef();
  const authorRef = useRef();
  const [error, setErrors] = useState(false);

  const validate = () => {
    let temp = {};
    temp.bookTitle =
      bookTitleRef.current.value === "" ? "Please book title" : "";
    temp.bookISBN =
      (bookISBNRef.current.value === "" ? "Please enter book ISBN" : "") ||
      (bookISBNRef.current.value.length !== 10 &&
      bookISBNRef.current.value.length !== 14
        ? "ISBN must be 14 or 11 digits"
        : "");

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
      bookTitleRef.current.value = "";
      bookISBNRef.current.value = "";
      setOpen(false);
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
      const { data } = await publicRequest.put(`author/${book._id}`, newAuthor);
      console.log(data);
      setNotify({
        isOpen: true,
        message: "Author updated successfully",
        type: "success",
        title: "Success",
      });
      bookTitleRef.current.value = "";
      bookISBNRef.current.value = "";
      setOpen(false);
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
        bookTitle: bookTitleRef.current.value,
        bookISBN: bookISBNRef.current.value,
      };

      if (book) {
        console.log("update");
        handleUpdateAuthor(newAuthor);
      } else {
        console.log("insert");
        handleInsertNewAuthor(newAuthor);
      }
    }
  };

  useEffect(() => {
    if (book) {
      //   bookTitleRef.current.value = author.firstName;
      //   bookISBNRef.current.value = author.lastName;
    }
  }, [book]);

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
            label="Book Title"
            helperText={error.bookTitle ? error.bookTitle : "Enter book title"}
            error={error.bookTitle ? true : false}
            inputRef={bookTitleRef}
          />
          <TextField
            id="outlined-required"
            label="Book ISBN"
            fullWidth
            helperText={error.bookISBN ? error.bookISBN : "Enter book ISBN"}
            error={error.bookISBN ? true : false}
            inputRef={bookISBNRef}
          />

          {book ? (
            <Button type="submit">Update Author</Button>
          ) : (
            <Button type="submit">Add Author</Button>
          )}
        </Stack>
      </form>
    </Container>
  );
}
