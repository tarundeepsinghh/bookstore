import { Box, Container, Skeleton } from "@mui/material";

export function BookDetailSkeleton() {
  return (
    <Container maxWidth='md' sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexDirection: { xs: "column", md: "row" },
        }}>
        {/* Book Cover Skeleton */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            height: "300px",
            backgroundColor: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
          }}>
          <Skeleton variant='rectangular' width='100%' height='100%' />
        </Box>

        {/* Book Details Skeleton */}
        <Box sx={{ flex: 1 }}>
          <Skeleton variant='text' width='60%' height={40} />
          <Skeleton variant='text' width='40%' height={30} sx={{ mt: 1 }} />
          <Skeleton variant='text' width='90%' height={20} sx={{ mt: 2 }} />
          <Skeleton variant='text' width='80%' height={20} sx={{ mt: 1 }} />
          <Skeleton variant='text' width='50%' height={20} sx={{ mt: 1 }} />
          <Skeleton
            variant='rectangular'
            width='40%'
            height={40}
            sx={{ mt: 3 }}
          />
        </Box>
      </Box>
    </Container>
  );
}
