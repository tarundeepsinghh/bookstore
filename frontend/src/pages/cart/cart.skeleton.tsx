import { AppSelectors } from "@/store/appSlice";
import { Box, Grid2, IconButton, Skeleton, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const CartPageSkeleton = () => {
  const cart = useSelector(AppSelectors.selectCartLength);
  return (
    <Box sx={{ padding: 3 }}>
      {/* Page Title */}
      <Typography variant='h4' align='center' gutterBottom>
        <Skeleton width='200px' />
      </Typography>
      {/* Cart Items Section */}
      <Grid2 container spacing={3}>
        {Array.from(new Array(cart === 0 ? 3 : cart)).map((_, index) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
            <Box
              sx={{
                border: "1px solid #ddd",
                borderRadius: 2,
                padding: 2,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}>
              <Skeleton variant='rectangular' width='100%' height={200} />
              <Skeleton width='60%' sx={{ marginTop: 2 }} />
              <Skeleton width='80%' sx={{ marginTop: 1 }} />
              <Skeleton width='50%' sx={{ marginTop: 1 }} />

              {/* Quantity Control Skeleton */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  marginTop: 2,
                }}>
                <Skeleton variant='rectangular' width={30} height={30} />
                <Skeleton width={20} />
                <Skeleton variant='rectangular' width={30} height={30} />
              </Box>

              {/* Remove Button Skeleton */}
              <IconButton sx={{ color: "red", marginTop: 2 }}>
                <Skeleton variant='rounded' width={40} height={40} />
              </IconButton>
            </Box>
          </Grid2>
        ))}

        {/* Empty Cart Message */}
        <Grid2 size={{ xs: 12 }}>
          <Skeleton width='100%' height={30} />
        </Grid2>
      </Grid2>

      {/* Total Price Section Skeleton */}
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.2rem",
        }}>
        <Skeleton width='30%' />
        <Skeleton width='20%' />
      </Box>
    </Box>
  );
};

export default CartPageSkeleton;
