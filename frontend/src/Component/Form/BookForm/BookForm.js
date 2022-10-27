import { Button, CircularProgress, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { publicRequest } from "../../../Axios/DefaultAxios";
import CustomSelect from "../../CustomSelect/CustomSelect";

export default function BookForm({ book, setNotify, setOpen }) {
  const bookTitleRef = useRef();
  const bookISBNRef = useRef();
  const [author, setAuthor] = useState("");
  const [authorOptions, setAuthorOptions] = useState([]);
  const [loading, setLoading] = useState(true);
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
    temp.author = author === "" ? "Please select author" : "";

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const handlehanges = (e) => {
    setAuthor(e.target.value);
  };
  const handleInsertNewAuthor = async (newBook) => {
    try {
      const { data } = await publicRequest.post("book", newBook);
      console.log(data);
      setNotify({
        isOpen: true,
        message: "Book added successfully",
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

  const handleUpdateAuthor = async (newBook) => {
    try {
      const { data } = await publicRequest.put(`author/${book._id}`, newBook);
      console.log(data);
      setNotify({
        isOpen: true,
        message: "Book updated successfully",
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
      const newBook = {
        title: bookTitleRef.current.value,
        isbn: bookISBNRef.current.value,
        author: author,
      };

      if (book) {
        handleUpdateAuthor(newBook);
      } else {
        handleInsertNewAuthor(newBook);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    if (book) {
      bookTitleRef.current.value = book.title;
      //   bookISBNRef.current.value = book.isbn;
      setAuthor(book.author._id);
    }
    async function getAuthorOptions() {
      const { data } = await publicRequest.get("author");
      setAuthorOptions(data.authors);
      setLoading(false);
    }
    getAuthorOptions();
  }, [book]);
  console.log(book);
  return (
    <Container>
      {!loading ? (
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
              helperText={
                error.bookTitle ? error.bookTitle : "Enter book title"
              }
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
            <CustomSelect
              name="Author"
              label="Book Author"
              options={authorOptions}
              value={author}
              handleChanges={handlehanges}
              error={error.author ? true : false}
              helperText={error.author ? error.author : "Select author"}
            />
            {book ? (
              <Button type="submit">Update Author</Button>
            ) : (
              <Button type="submit">Add Author</Button>
            )}
          </Stack>
        </form>
      ) : (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 5 }}
        >
          <CircularProgress width="100px" color="primary" />
        </Stack>
      )}
    </Container>
  );
}
