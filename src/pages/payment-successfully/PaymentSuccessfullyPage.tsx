import { Box, Button, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const PaymentSuccessfullyPage = () => {
  // page title
  useTitle("Payment");

  // counter state
  const [counter, setCounter] = useState<number>(10);

  // navigate
  const navigate = useNavigate();

  // Every second, one number is subtracted from the counter
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevNumber: number) => prevNumber - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // if the counter is equal to 0, it redirects the user to the main page
  useEffect(() => {
    if (counter === 0) {
      navigate("/", { replace: true });
    }
  }, [counter]);

  return (
    <Box
      component="div"
      className="flex flex-col gap-y-3 mt-10 px-10 items-center justify-center h-full w-full"
    >
      <CheckCircleIcon
        className="size-56"
        sx={(theme) => ({ color: theme.palette.success.main })}
      />
      <Typography variant="body1" className="text-center">
        Your purchase was successful. Thank you for your trust
      </Typography>
      <Link to={"/"}>
        <Button color="success" className="mt-5" variant="contained">
          Back To Home Page {counter}
        </Button>
      </Link>
    </Box>
  );
};

export default PaymentSuccessfullyPage;
