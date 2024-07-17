import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import ShoppingCart from "../../components/carts/ShoppingCart";
import { v4 as uuidv4 } from "uuid";

const ShoppingCartPage = () => {
  // carts
  const { carts } = useSelector((state: RootState) => state.carts);

  return (
    <Paper className="max-w-full xl:max-w-6xl mx-auto p-2 mt-3">
      <Box component="div" className="flex items-center justify-between">
        <Typography variant="h1" className="mx-auto">
          ShoppingCart
        </Typography>
        <Link to={"/"}>
          <IconButton>
            <ArrowForwardIcon />
          </IconButton>
        </Link>
      </Box>
      <Box component="div" className="mt-7">
        <Grid container gap={2}>
          <Grid xs={12} md={8} item className="flex flex-col gap-y-2">
            {carts.map((cart: ICart) => (
              <ShoppingCart data={cart} key={uuidv4()} />
            ))}
          </Grid>
          <Grid xs={12} md={3.8} item>
            Two
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ShoppingCartPage;
