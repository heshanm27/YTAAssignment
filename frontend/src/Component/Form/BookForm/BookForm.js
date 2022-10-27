import { Button, CircularProgress, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../../../Axios/DefaultAxios";
import CustomSelect from "../../CustomSelect/CustomSelect";

const initBook = {
  title: "",
  isbn: "",
  author: "",
};
export default function BookForm({ book, setNotify, setOpen, setRefetch }) {
  const [bookValues, setBookValues] = useState(initBook);
  const [authorOptions, setAuthorOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrors] = useState(false);

  const validate = () => {
    let temp = {};
    temp.bookTitle = bookValues.title === "" ? "Please book title" : "";
    temp.bookISBN =
      (bookValues.isbn === "" ? "Please enter book ISBN" : "") ||
      (bookValues.isbn.length !== 10 && bookValues.isbn.length !== 14
        ? "ISBN must be 14 or 11 digits"
        : "");
    temp.author = bookValues.author === "" ? "Please select author" : "";

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const handlehanges = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setBookValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleInsertNewBook = async () => {
    try {
      const { data } = await publicRequest.post("book", bookValues);
      console.log(data);
      setNotify({
        isOpen: true,
        message: "Book added successfully",
        type: "success",
        title: "Success",
      });
      setBookValues(initBook);
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

  const handleUpdateBook = async () => {
    try {
      const { data } = await publicRequest.put(`book/${book._id}`, bookValues);
      console.log(data);
      setNotify({
        isOpen: true,
        message: "Book updated successfully",
        type: "success",
        title: "Success",
      });
      setBookValues(initBook);
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
      if (book) {
        handleUpdateBook();
      } else {
        handleInsertNewBook();
      }
    }
  };

  useEffect(() => {
    setLoading(true);

    if (book) {
      setBookValues({
        title: book.title,
        isbn: book.isbn,
        author: book.author._id,
      });
    }
    async function getAuthorOptions() {
      const { data } = await publicRequest.get("author");
      setAuthorOptions(data.authors);
      setLoading(false);
    }

    getAuthorOptions();
  }, [book]);

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
              name="title"
              label="Book Title"
              helperText={
                error.bookTitle ? error.bookTitle : "Enter book title"
              }
              error={error.bookTitle ? true : false}
              value={bookValues.title}
              onChange={handlehanges}
            />
            <TextField
              name="isbn"
              label="Book ISBN"
              fullWidth
              helperText={error.bookISBN ? error.bookISBN : "Enter book ISBN"}
              error={error.bookISBN ? true : false}
              value={bookValues.isbn}
              onChange={handlehanges}
            />
            <CustomSelect
              name="author"
              label="Book Author"
              options={authorOptions}
              value={bookValues.author}
              handleChanges={handlehanges}
              error={error.author ? true : false}
              helperText={error.author ? error.author : "Select author"}
            />
            {book ? (
              <Button type="submit">Update Book</Button>
            ) : (
              <Button type="submit">Add Book</Button>
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
