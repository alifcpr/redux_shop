import { ShoppingCartOutlined } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      color="primary"
      component="abbr"
      position="static"
      sx={{ m: "0px" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Redux Shop</Typography>
        <IconButton color="primary">
          <ShoppingCartOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
