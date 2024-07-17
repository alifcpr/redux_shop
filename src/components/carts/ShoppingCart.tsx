import { Box, IconButton, Rating, Tooltip, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AppDispatch } from "../../redux/store/store";
import { useDispatch } from "react-redux";
import {
  decreamentProduct,
  increamentProduct,
  removeCart,
} from "../../redux/slices/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

interface ShoppingCartProps {
  data: ICart;
}

const ShoppingCart = ({ data }: ShoppingCartProps) => {
  // cart data
  const { title, image, rating, quantity, price } = data;

  // dispatch
  const dispatch: AppDispatch = useDispatch();

  // handle button actions
  const handleAction = (type: string) => {
    switch (type) {
      case "DELETE":
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
      className="rounded-md p-3 flex flex-col md:flex-row items-center gap-x-3"
      sx={(theme) => ({
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.secondary.dark
            : theme.palette.secondary.light,
      })}
    >
      <Box component="div" className="w-24 h-20 overflow-hidden rounded-md">
        <LazyLoadImage
          src={image}
          alt={title}
          className="w-full h-full object-fit object-center"
        />
      </Box>
      <Box
        component="div"
        className="flex flex-col items-center md:items-center md:flex-row md:justify-between w-full gap-y-2"
      >
        <Box
          component="div"
          className="flex flex-col items-center  md:items-start"
        >
          <Tooltip title={title} placement="top">
            <Typography
              className="mt-2 max-w-[80vw] md:mt-0 md:max-w-[20vw] truncate"
              variant="body1"
            >
              {title}
            </Typography>
          </Tooltip>
          <Box component="div" className="flex items-center gap-x-1">
            <Rating value={rating.rate} precision={0.5} readOnly />
            <Typography variant="caption">{rating.count}</Typography>
          </Box>
          <Box component="div" className="mt-2 flex items-center gap-x-1">
            <LocalOfferIcon className="size-5" />
            <Typography variant="body1">{price}</Typography>
          </Box>
        </Box>
        <Box component="div" className="flex items-center gap-x-4">
          {quantity > 1 ? (
            <IconButton
              sx={(theme) => ({
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.secondary.light
                    : theme.palette.secondary.dark,
              })}
              onClick={() => handleAction("DECREAMENT")}
            >
              <RemoveIcon />
            </IconButton>
          ) : (
            <IconButton
              sx={(theme) => ({
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.secondary.light
                    : theme.palette.secondary.dark,
              })}
              onClick={() => handleAction("DELETE")}
            >
              <DeleteIcon />
            </IconButton>
          )}
          <Typography variant="body1">{quantity}</Typography>
          <IconButton
            sx={(theme) => ({
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.secondary.light
                  : theme.palette.secondary.dark,
            })}
            onClick={() => handleAction("INCREAMENT")}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ShoppingCart;
