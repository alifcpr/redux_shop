import { ShoppingCartOutlined } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Badge,
} from "@mui/material";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../redux/slices/settingSlice";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const Header = () => {
  // theme
  const { theme: themeMode } = useSelector((state: RootState) => state.setting);

  const { total } = useSelector((state: RootState) => state.carts);

  // dispatch
  const dispatch: AppDispatch = useDispatch();

  // handle change theme mode
  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <AppBar
      component="abbr"
      position="static"
      enableColorOnDark
      sx={(theme) => ({
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
      })}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Redux Shop</Typography>
        <Box component="div" className="flex items-center gap-x-4">
          <Badge badgeContent={total} color="secondary">
            <IconButton color="primary">
              <ShoppingCartOutlined />
            </IconButton>
          </Badge>

          <IconButton onClick={handleChangeTheme} color="primary">
            {themeMode === "light" ? <ModeNightIcon /> : <WbSunnyIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
