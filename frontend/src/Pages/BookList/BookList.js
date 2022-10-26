import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import {
  CircularProgress,
  CssBaseline,
  Grid,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { publicRequest } from "../../Axios/DefaultAxios";
import BookCard from "../../Component/BookCard/BookCard";
export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    async function fetchBooks() {
      try {
        const { data } = await publicRequest.get(`book/?page=${page}`);
        console.log(data);
        setCount(data.bookPageCount);
        setBooks(data.books);
      } catch (err) {
        console.log(err);
      }
    }
    fetchBooks();
  }, [page]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ backgroundColor: "White" }}>
        <Stack direction="row" sx={{ padding: { xs: 2, sm: 5 } }}>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <Paper sx={{ padding: { xs: 2, sm: 5 }, mt: 5, mb: 5 }}>
                <Typography color="primary" variant="h4" align="center">
                  Books
                </Typography>

                <Grid
                  container
                  spacing={5}
                  justifyContent="start"
                  alignItems="center"
                  sx={{ mt: 5 }}
                >
                  {!loading && books.length > 0
                    ? books.map((book) => (
                        <Grid item xs={12} sm={6} key={book._id}>
                          <BookCard
                            key={book._id}
                            title={book.title}
                            isbn={book.isbn}
                          />
                        </Grid>
                      ))
                    : null}
                </Grid>

                {/* check if notes count is greater than 0 if condition match show no notes found */}
                {books && books.length === 0 && (
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
      </Container>
    </>
  );
}
