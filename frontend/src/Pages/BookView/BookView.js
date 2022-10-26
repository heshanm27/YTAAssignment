import {
  CircularProgress,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { publicRequest } from "../../Axios/DefaultAxios";
import CustomTypo from "../../Component/CustomTypo/CustomTypo";

export default function BookView() {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      const { data } = await publicRequest.get(`book/${id}`);
      setBookDetails(data.book);
      setLoading(false);
    }
    getBookDetails();
  }, [id]);
  console.log(bookDetails);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ backgroundColor: "White" }}>
        <Stack direction="row" sx={{ padding: { xs: 2, sm: 5 } }}>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <Paper
                sx={{
                  p: { xs: 5, sm: 10 },
                  mt: 5,
                  mb: 5,
                }}
              >
                <Typography color="primary" variant="h4" align="center">
                  Book Details
                </Typography>
                {!loading && bookDetails ? (
                  <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mt: 5 }}
                  >
                    <Stack
                      sx={{ width: "100%" }}
                      direction="row"
                      justifyContent="space-between"
                    >
                      <CustomTypo text="Book Title" />
                      <CustomTypo text={bookDetails.title} />
                    </Stack>
                    <Divider
                      flexItem
                      variant="fullWidth"
                      orientation="horizontal"
                    />
                    <Stack
                      sx={{ width: "100%" }}
                      direction="row"
                      justifyContent="space-between"
                    >
                      <CustomTypo text="Book ISBN" />
                      <CustomTypo text={bookDetails.isbn} />
                    </Stack>
                    <Divider
                      flexItem
                      variant="fullWidth"
                      orientation="horizontal"
                    />
                    <Stack
                      sx={{ width: "100%" }}
                      direction="row"
                      justifyContent="space-between"
                    >
                      <CustomTypo text="Book Author" />
                      <CustomTypo
                        text={`${
                          bookDetails.author?.firstName +
                          " " +
                          bookDetails.author?.lastName
                        }  `}
                      />
                    </Stack>
                  </Stack>
                ) : null}
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
              </Paper>
            </Grid>
          </Grid>
        </Stack>
      </Container>
      ;
    </>
  );
}
