import { BookResponse, getBookById } from "@/service/book-service";
import { AppSelectors } from "@/store/appSlice";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  isRouteErrorResponse,
  useParams,
  useRouteError,
} from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

export function Component() {
  const params = useParams();
  const index = useSelector(AppSelectors.selectIndex);

  const [detail, setDetail] = useState<BookResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await getBookById(params.id as string);
      setDetail(response?.data);
      setLoading(false);
    };
    if (params.id !== undefined || params.id !== null) fetchDetail();
  }, [params.id]);

  if (loading) {
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'>
        <CircularProgress />
      </Box>
    );
  }

  if (!detail) {
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'>
        <Typography variant='h5'>Book not found.</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth='md' sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexDirection: { xs: "column", md: "row" },
        }}>
        {/* Book Cover */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            backgroundColor: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            overflow: "hidden",
          }}>
          <img
            src={`/assets/books/book-${index + 1}.png`}
            alt={`${detail.title}`}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        {/* Book Details */}
        <Box sx={{ flex: 1 }}>
          <Typography variant='h4' gutterBottom>
            {detail.title}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary' gutterBottom>
            by {detail.author}
          </Typography>
          <Typography variant='body1' sx={{ mb: 2 }}>
            {detail.description}
          </Typography>
          <Typography variant='body2' sx={{ color: "text.secondary", mb: 1 }}>
            Category: {detail.category}
          </Typography>
          <Typography variant='h6' sx={{ fontWeight: "bold", mb: 3 }}>
            Price: ₹ {detail.price}
          </Typography>
          <Button
            variant='contained'
            startIcon={<ShoppingCartRoundedIcon />}
            sx={{ backgroundColor: "#ffce1a", textTransform: "capitalize" }}>
            Add to Basket
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

// If you want to customize the component display name in React dev tools:
Component.displayName = "BookDetailPage";

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <h1>
        {error.status} {error.statusText}
      </h1>
    );
  }
  const errMsg = error instanceof Error ? error.message : "Unknown error";
  return <h1>{errMsg}</h1>;
}
