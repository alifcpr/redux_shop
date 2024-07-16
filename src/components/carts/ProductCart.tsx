import { Box, Button, Rating, Tooltip, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

interface ProductCartProps {
  data: IProduct;
}

const ProductCart = ({ data }: ProductCartProps) => {
  const { title, image, rating, price, category } = data;
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
        <Button color="primary" className="mt-4" variant="contained">
          Add To Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCart;
