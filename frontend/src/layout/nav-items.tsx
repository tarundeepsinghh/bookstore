import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

const NavItems = [
  {
    label: "dashboard",
    title: "Dashboard",
    path: "/dashboard",
    icon: <SpaceDashboardRoundedIcon />,
  },
  {
    label: "recentlyAdded",
    title: "Recently Added",
    path: "/",
    icon: <AddBusinessRoundedIcon />,
  },
  {
    label: "bestSellers",
    title: "Best Sellers",
    path: "/",
    icon: <StarBorderRoundedIcon />,
  },
  {
    label: "orders",
    title: "Orders",
    path: "/",
    icon: <LocalShippingRoundedIcon />,
  },
  {
    label: "aboutUs",
    title: "About Us",
    path: "/",
    icon: <InfoRoundedIcon />,
  },
];

export default NavItems;
