import { StyledButton } from "@/components/button/button.component";
import {
  AppSelectors,
  clearQuery,
  setQuery,
  toggleMenu,
} from "@/store/appSlice";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import {
  AppBar,
  Box,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { ReactiveDrawer } from "./reactive-drawer";

export function DashboardLayout() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const location = useLocation();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  const query = useSelector(AppSelectors.selectQuery);
  const cart = useSelector(AppSelectors.selectCartLength);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        boxShadow: "none",
        overflowX: "auto",
        overflowY: "scroll",
      }}>
      <AppBar
        position='sticky'
        sx={{
          top: 0,
          backgroundColor: "#fff",
          width: "100%",
          boxShadow: "none",
          height: { xs: "70px", md: "60px" },
        }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}>
          {/* Menu Icon */}
          <ListRoundedIcon
            sx={{
              color: "#000",
              cursor: "pointer",
            }}
            onClick={() => dispatch(toggleMenu())}
          />

          {/* Search Box */}
          {location.pathname === "/dashboard" && (
            <TextField
              variant='outlined'
              placeholder={isBelowMd ? "Search" : "What are you looking for?"}
              size='small'
              value={query}
              onChange={(e) => dispatch(setQuery(e.target.value))}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon style={{ color: "#494949" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    {query && (
                      <ClearIcon
                        style={{ color: "#494949", cursor: "pointer" }}
                        onClick={() => dispatch(clearQuery())}
                      />
                    )}
                  </InputAdornment>
                ),
                style: {
                  borderRadius: 8,
                  backgroundColor: "#ababab",
                },
              }}
              sx={{
                flex: 1,
                width: { xs: "100%", sm: "70%", md: "40%" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#aaa",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
              }}
            />
          )}

          {/* Icons and Basket */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}>
            <a href='/cart'>
              {isBelowMd ? (
                <div style={{ position: "relative" }}>
                  <ShoppingCartRoundedIcon
                    sx={{
                      color: "#ffce1a",
                      cursor: "pointer",
                    }}
                  />
                  {cart > 0 && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "red",
                        color: "white",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2px",
                      }}>
                      {cart}
                    </div>
                  )}
                </div>
              ) : (
                <StyledButton size='small' style={{ position: "relative" }}>
                  <ShoppingCartRoundedIcon fontSize='small' />
                  <Typography sx={{ ml: 1 }}>Basket</Typography>
                  {cart > 0 && (
                    <div
                      style={{
                        position: "absolute",
                        top: -4,
                        right: -4,
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "red",
                        color: "white",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2px",
                      }}>
                      {cart}
                    </div>
                  )}
                </StyledButton>
              )}
            </a>

            <FavoriteBorderRoundedIcon
              sx={{
                color: "#000",
                cursor: "pointer",
              }}
            />
            <PersonOutlineRoundedIcon
              sx={{
                color: "#000",
                cursor: "pointer",
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <ReactiveDrawer />
      <Box sx={{ pb: 10 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
