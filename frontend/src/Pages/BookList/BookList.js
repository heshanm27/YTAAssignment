import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import {
  CircularProgress,
  CssBaseline,
  Divider,
  Grid,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { publicRequest } from "../../Axios/DefaultAxios";
import BookCard from "../../Component/BookCard/BookCard";
import NavBar from "../../Component/NavBar/NavBar";
import CustomSnackBar from "../../Component/CustomSnackBar/CustomSnackBar";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [refetch, setRefetch] = useState(true);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "error",
    title: "",
  });
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setLoading(true);
    async function fetchBooks() {
      try {
        const { data } = await publicRequest.get(`book/?page=${page}`);
        console.log(data);
        setCount(data.bookPageCount);
        setBooks(data.books);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchBooks();
  }, [page, refetch]);

  return (
    <>
      <NavBar setNotify={setNotify} setRefetch={setRefetch} />
      <CssBaseline />
      <Container maxWidth="lg" sx={{ backgroundColor: "White" }}>
        <Stack direction="row" sx={{ padding: { xs: 2, sm: 5 } }}>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <Paper
                sx={{
                  paddingLeft: { xs: 5, sm: 12 },
                  pb: { xs: 5, sm: 5 },
                  mt: 5,
                  mb: 5,
                }}
              >
                <Typography color="primary" variant="h4" align="center">
                  Books
                </Typography>
                <Divider
                  orientation="horizontal"
                  flexItem
                  variant="middle"
                  textAlign="center"
                />
                <Grid
                  container
                  spacing={5}
                  justifyContent="start"
                  alignItems="start"
                  sx={{ mt: 5 }}
                >
                  {!loading && books.length > 0
                    ? books.map((book) => (
                        <Grid item xs={12} sm={12} md={6} key={book._id}>
                          <BookCard
                            key={book._id}
                            title={book.title}
                            isbn={book.isbn}
                            id={book._id}
                          />
                        </Grid>
                      ))
                    : null}
                </Grid>

                {/* check if notes count is greater than 0 if condition match show no notes found */}
                {!loading && books && books.length === 0 && (
                  <Typography
                    sx={{ mt: 5 }}
                    variant="body2"
                    align="center"
                    color="info"
                  >
                    No data to show{" "}
                  </Typography>
                )}

                {/* if loading state is true show  CircularProgress*/}
                {loading && (
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mt: 5 }}
                  >
                    <CircularProgress width="100px" color="primary" />
                  </Stack>
                )}

                {/**Pagination Component */}
                {!loading ? (
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mt: 5 }}
                  >
                    <Pagination
                      size="small"
                      color="primary"
                      count={count}
                      page={page}
                      defaultPage={page}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Stack>
                ) : null}
              </Paper>
            </Grid>
          </Grid>
        </Stack>
        <CustomSnackBar notify={notify} setNotify={setNotify} />
      </Container>
    </>
  );
}
