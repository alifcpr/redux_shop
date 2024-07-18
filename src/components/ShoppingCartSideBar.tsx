import { Box, Typography, Button, Backdrop, Fade, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { useState } from "react";
import { clearShoppingCart } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const ShoppingCartSideBar = () => {
  // modal state
  const [open, setOpen] = useState<boolean>(false);
  const [paymentLoading, setPaymentLoading] = useState<boolean>(false);

  // navigate
  const navigate = useNavigate();

  // dispatch
  const dispatch: AppDispatch = useDispatch();

  // close modal
  const handleClose = () => {
    setOpen(false);
  };

  // handle delete all the products from shoppingCart
  const handleDeleteAllCarts = () => {
    dispatch(clearShoppingCart());
    toast.success("All products have been removed from the shopping cart");
    setOpen(false);
  };

  // handle payment action
  const handlePaymentAction = () => {
    setPaymentLoading(true);
    toast.loading("Please wait ....", { id: "payment" });
    setTimeout(() => {
      setPaymentLoading(false);
      toast.success("Your purchase was successful", { id: "payment" });
      dispatch(clearShoppingCart());
      navigate("/payment/successfully", { replace: true });
    }, 2000);
  };

  // carts price and total info
  const { priceAll, totalCount } = useSelector(
    (state: RootState) => state.carts
  );

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            component="div"
            className="flex items-center justify-center h-full"
          >
            <Box
              sx={(theme) => ({
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? theme.palette.secondary.main
                    : theme.palette.secondary.light,
              })}
              className="z-[9999] rounded-md p-3"
            >
              <Typography variant="h6">Are You Sure ?</Typography>
              <Typography variant="body1">
                Are you sure you want to delete the entire cart?
              </Typography>
              <Box component="div" className="flex items-center gap-x-3 mt-2">
                <Button
                  onClick={handleDeleteAllCarts}
                  size="small"
                  color="error"
                  variant="contained"
                >
                  Delete
                </Button>
                <Button
                  onClick={handleClose}
                  size="small"
                  color="secondary"
                  variant="contained"
                >
                  No
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>

      <Box
        component="div"
        sx={(theme) => ({
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.secondary.dark
              : theme.palette.secondary.light,
        })}
        className="p-2 flex flex-col rounded-md"
      >
        <Typography variant="body1">total product : {totalCount}</Typography>
        <Typography variant="body1">
          total price : {priceAll.toFixed(2)}
        </Typography>
        <Box component="div" className="flex mt-5 items-center justify-between">
          <Button
            onClick={handlePaymentAction}
            disabled={paymentLoading}
            size="small"
            variant="contained"
            color="success"
          >
            {paymentLoading ? (
              <CircularProgress size={24} color="success" />
            ) : (
              "Payment"
            )}
          </Button>
          <Button
            size="small"
            sx={(theme) => ({
              color: theme.palette.mode === "dark" ? "white" : "black",
            })}
            variant="outlined"
            color="error"
            onClick={() => setOpen(true)}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ShoppingCartSideBar;
