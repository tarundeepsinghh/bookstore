import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ theme }) => ({
  backgroundColor: "#ffce1a",
  textDecoration: "none",
  padding: theme.spacing(1.5),
  borderRadius: "12px",
  color: "white",
  "&:active": {
    color: "#ffce1a",
    backgroundColor: "white",
  },
}));

const NotFoundPage = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
      }}>
      <Typography variant={isMd ? "h4" : "h1"}>404</Typography>
      <Typography variant={isMd ? "h4" : "h1"}>Page Not Found</Typography>
      <br />
      <StyledLink to='/'>Go Back</StyledLink>
    </Box>
  );
};

export default NotFoundPage;
