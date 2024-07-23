import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import ShoppingCart from "../../components/carts/ShoppingCart";
import { v4 as uuidv4 } from "uuid";
import ShoppingCartSideBar from "../../components/ShoppingCartSideBar";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const ShoppingCartPage = () => {
  // carts
  const { carts } = useSelector((state: RootState) => state.carts);

  return (
    <Box
      component="div"
      className="max-w-full xl:max-w-6xl min-h-[calc(100vh-17vh)] mx-auto p-2 mt-3"
    >
      <Box component="div" className="flex  items-center justify-between">
        <Typography variant="h1" className="mx-auto">
          ShoppingCart
        </Typography>
        <Link to={"/"}>
          <IconButton
            sx={(theme) => ({
              color: theme.palette.mode === "dark" ? "white" : "black",
            })}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Link>
      </Box>
      {carts.length > 0 ? (
        <Box component="div" className="mt-7">
          <Grid container gap={2}>
            <Grid xs={12} md={8} item className="flex flex-col gap-y-2">
              {carts.map((cart: ICart) => (
                <ShoppingCart data={cart} key={uuidv4()} />
              ))}
            </Grid>
            <Grid xs={12} md={3.8} item>
              <ShoppingCartSideBar />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box
          component="div"
          className="flex items-center justify-center p-4 flex-col mt-10"
        >
          <ProductionQuantityLimitsIcon className="size-32" />
          <Typography variant="body1">
            You have no products in the shopping cart
          </Typography>
          <Link to={"/"}>
            <Button color="success" variant="contained" className="mt-4">
              Back To Shop
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default ShoppingCartPage;
