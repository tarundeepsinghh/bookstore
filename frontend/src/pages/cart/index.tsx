import { AppSelectors } from "@/store/appSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Typography, IconButton, Grid2 } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/store/appSlice";

export function Component() {
  const dispatch = useDispatch();
  const cart = useSelector(AppSelectors.selectCart);
  console.log(cart);
  const cartItems = Object.values(cart) as unknown as {
    _id: string;
    author: string;
    title: string;
    price: number;
    quantity: number;
  }[];
  const cartLength = cartItems.length;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant='h4' align='center' gutterBottom>
        Your Shopping Cart
      </Typography>

      <Grid2 container spacing={3}>
        {/* Render Cart Items */}
        {cartLength > 0 ? (
          cartItems.map(({ _id, author, title, price, quantity }) => (
            <Grid2 key={_id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
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
                {/* Book Image */}
                <img
                  src={`/assets/books/book-${_id}.png`}
                  alt='Book'
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: 4,
                    marginBottom: 10,
                  }}
                />
                <Typography variant='h6'>{title}</Typography>
                <Typography variant='body2'>{author}</Typography>
                <Typography variant='body2'>₹ {price}</Typography>

                {/* Quantity Control */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    marginTop: 2,
                  }}>
                  <Button
                    variant='outlined'
                    size='small'
                    onClick={() => handleDecreaseQuantity(_id)}>
                    -
                  </Button>
                  <Typography variant='body1'>{quantity}</Typography>
                  <Button
                    variant='outlined'
                    size='small'
                    onClick={() => handleIncreaseQuantity(_id)}>
                    +
                  </Button>
                </Box>

                {/* Remove Button */}
                <IconButton
                  sx={{ color: "red", marginTop: 2 }}
                  onClick={() => handleRemoveItem(_id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Grid2>
          ))
        ) : (
          <Grid2 size={{ xs: 12 }}>
            <Typography variant='h6' align='center'>
              Your cart is empty.
            </Typography>
          </Grid2>
        )}
      </Grid2>

      {/* Total Price and Checkout Section */}
      {cartLength > 0 && (
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.2rem",
          }}>
          <Typography variant='h6'>Total: ₹ {totalPrice.toFixed(2)}</Typography>
          <Button variant='contained' color='primary'>
            Proceed to Checkout
          </Button>
        </Box>
      )}
    </Box>
  );
}

Component.displayName = "CartPage";
