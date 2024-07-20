import {
  Box,
  Button,
  Paper,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/store/store";
import { fetchProductById } from "../../../redux/slices/productDetailSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { addToCart } from "../../../redux/slices/cartSlice";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useTitle from "../../../hooks/useTitle";

const ProductDetailPage = () => {
  // get product id from url
  const { id } = useParams<{ id: string }>();

  // dispatch
  const dispatch: AppDispatch = useDispatch();

  // select productDetail info from productDetail state
  const { error, loading, product } = useSelector(
    (state: RootState) => state.productDetail
  );

  // destructure productDetail
  const { image, title, description, rating, category, price } = product;

  // page title
  useTitle(title);

  // select all shoppingCarts
  const { carts } = useSelector((state: RootState) => state.carts);

  // checking the presence of the product in the shopping cart
  const isInShoppingCart = !!carts.find(
    (cart: ICart) => cart.id === product.id
  );

  // handle add product to shoppingCart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // fetch product by id
  useEffect(() => {
    dispatch(fetchProductById(Number(id)!));
  }, [id]);

  if (loading) {
    return (
      <Box
        component="div"
        className="max-w-full xl:max-w-6xl mx-auto p-5 rounded-md mt-3 md:mt-10"
      >
        <Skeleton
          className="h-[700px] rounded-md md:h-[400px]"
          variant="rectangular"
        />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        component="div"
        className="max-w-full flex items-center justify-center xl:max-w-6xl mx-auto p-5 rounded-md mt-3 h-[700px] md:h-[400px] md:mt-10"
      >
        <Typography variant="h5" className="text-center">
          {error}
        </Typography>
      </Box>
    );
  }

  if (product)
    return (
      <Paper
        sx={(theme) => ({
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.secondary.main
              : theme.palette.secondary.light,
        })}
        className="max-w-full xl:max-w-6xl mx-auto rounded-md p-5 mt-3 md:mt-10"
      >
        <Box component="div" className="flex justify-end mb-3">
          <Link to={"/"}>
            <Button
              className="flex items-center gap-x-2"
              sx={(theme) => ({
                color: theme.palette.mode === "dark" ? "white" : "black",
              })}
            >
              <Typography variant="body2">back</Typography>
              <ArrowForwardIcon />
            </Button>
          </Link>
        </Box>
        <Box
          component="div"
          className="flex flex-col md:flex-row items-center h-full w-full gap-x-10"
        >
          <Box
            component="div"
            className="w-full h-[300px] md:w-[400px] overflow-hidden"
          >
            <LazyLoadImage
              src={image}
              className="object-fit w-full h-full object-center"
              alt={title}
            />
          </Box>
          <Box
            component="div"
            className="flex flex-col justify-between w-full min-h-full"
          >
            <Typography className="mt-2" variant="h5">
              {title}
            </Typography>
            <Box
              component="div"
              className="flex items-center justify-between mt-4 md:gap-x-10 md:justify-start"
            >
              <Typography className="" variant="overline">
                {category}
              </Typography>
              <Rating value={rating.rate} readOnly precision={0.5} />
            </Box>
            <Typography variant="body1" className="mt-3">
              {description}
            </Typography>
            <Box component="div" className="flex items-center mt-3 gap-x-2">
              <Box component="div" className="flex items-center">
                <Typography variant="body1"></Typography>
                <LocalOfferIcon />
              </Box>
              <Typography variant="h6">{price}</Typography>
            </Box>
            {isInShoppingCart ? (
              <Link to={"/shopping-cart"} className="w-full">
                <Button
                  variant="contained"
                  className="flex items-center mt-10 w-full gap-x-3"
                >
                  <Typography variant="button">
                    Available in Shopping cart, continue shopping
                  </Typography>
                  <ArrowForwardIcon />
                </Button>
              </Link>
            ) : (
              <Button
                onClick={handleAddToCart}
                className="mt-10"
                variant="contained"
              >
                Add To Cart
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    );
};

export default ProductDetailPage;
