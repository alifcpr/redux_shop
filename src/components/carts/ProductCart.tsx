import { Box, Button, Rating, Tooltip, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreamentProduct,
  increamentProduct,
  removeCart,
} from "../../redux/slices/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

interface ProductCartProps {
  data: IProduct;
}

const ProductCart = ({ data }: ProductCartProps) => {
  // product info
  const { title, image, rating, price, category } = data;

  // current product data
  const { carts } = useSelector((state: RootState) => state.carts);
  const currentProduct = carts.find((carts: ICart) => carts.id === data.id);

  // dispatch
  const dispatch: AppDispatch = useDispatch();

  // handle product all actions
  const handleProductAction = (type: string) => {
    switch (type) {
      case "ADD":
        dispatch(addToCart(data));
        break;
      case "REMOVE":
        dispatch(removeCart(data));
        break;
      case "INCREAMENT":
        dispatch(increamentProduct(data));
        break;
      case "DECREAMENT":
        dispatch(decreamentProduct(data));
        break;
    }
  };

  return (
    <Box
      component="div"
      sx={(theme) => ({
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.secondary.dark
            : theme.palette.secondary.light,
      })}
      className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3 rounded-md p-3"
    >
      <Box
        component="div"
        className="overflow-hidden relative bg-yellow w-full h-[300px]"
      >
        <LazyLoadImage
          alt={title}
          src={image}
          effect="blur"
          className="!w-full !h-full !object-fit !object-center"
          wrapperClassName="w-full h-full object-fit object-center"
          threshold={5}
          useIntersectionObserver
        />
        <Typography
          sx={(theme) => ({
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.secondary.dark
                : theme.palette.secondary.light,
          })}
          variant="caption"
          className="absolute px-2 py-1 top-2 rounded-md min-w-[50px] flex items-center justify-center z-50 left-2"
        >
          {category}
        </Typography>
      </Box>
      <Box component="div" className="p-2 flex flex-col">
        <Tooltip title={title} placement="top">
          <Typography variant="body1" className="truncate">
            {title}
          </Typography>
        </Tooltip>
        <Box component="div" className="flex mt-2 items-center justify-between">
          <Rating value={rating.rate} readOnly precision={0.5} />
          <Typography>{rating.count}</Typography>
        </Box>
        <Box component="div" className="flex mt-2 items-center gap-x-2">
          <LocalOfferIcon />
          <Typography variant="h6">{price.toLocaleString("en")}</Typography>
        </Box>
        {currentProduct ? (
          <Box
            component="div"
            className="flex mt-4 items-center justify-between"
          >
            {currentProduct.quantity > 1 ? (
              <Button
                onClick={() => handleProductAction("DECREAMENT")}
                variant="contained"
              >
                <RemoveIcon />
              </Button>
            ) : (
              <Button
                onClick={() => handleProductAction("REMOVE")}
                variant="contained"
              >
                <DeleteIcon />
              </Button>
            )}
            <Typography variant="body1">{currentProduct.quantity}</Typography>
            <Button
              onClick={() => handleProductAction("INCREAMENT")}
              variant="contained"
            >
              <AddIcon />
            </Button>
          </Box>
        ) : (
          <Button
            onClick={() => handleProductAction("ADD")}
            color="primary"
            className="mt-4"
            variant="contained"
          >
            Add To Cart
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ProductCart;
