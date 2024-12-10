import {
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppSelectors, toggleMenu } from "../store/appSlice";
import { useNavigate } from "react-router-dom";
import NavItems from "./nav-items";

const SideNavMenuItem = ({
  onClick,
  icon,
  title,
}: {
  index: number;
  onClick: () => void;
  activeIcon?: string;
  icon: React.ReactNode;
  label: string;
  title: string;
}) => {
  return (
    <ListItem
      sx={{
        borderRadius: "12px",
        padding: "5px 0 5px 0",
      }}>
      <ListItemButton
        disableTouchRipple
        sx={{
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent",
          },
        }}
        onClick={onClick}>
        <ListItemIcon sx={{ minWidth: "30px", marginRight: "7px" }}>
          {icon}
        </ListItemIcon>
        <ListItemText>
          <Typography
            sx={{
              color: "#B44E43",
              fontSize: "16px",
              fontWeight: "400",
            }}>
            {title}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export function ReactiveDrawer() {
  const navigate = useNavigate();
  const isMenuOpen = useSelector(AppSelectors.selectIsMenuOpen);
  const dispatch = useDispatch();
  return (
    <Drawer
      open={isMenuOpen}
      sx={{ boxShadow: "none" }}
      onClose={() => dispatch(toggleMenu())}
      PaperProps={{
        sx: {
          boxShadow: "none",
          width: "250px",
          background: "#ffde67",
          borderCollapse: "collapse",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      }}>
      <Typography sx={{ color: "#fff", fontSize: "20px", marginY: "1.5rem" }}>
        Menu
      </Typography>
      {NavItems.map(({ label, title, path, icon }, index) => (
        <SideNavMenuItem
          key={index}
          index={index}
          onClick={() => {
            navigate(path);
            dispatch(toggleMenu());
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          icon={icon}
          label={label}
          title={title}
        />
      ))}
    </Drawer>
  );
}
