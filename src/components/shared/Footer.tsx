import { Box, Link, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const Footer = () => {
  // current location
  const { pathname } = useLocation();
  // do not show at this routes
  const routes = ["product"];

  if (!routes.includes(pathname.split("/")[1]))
    return (
      <Box
        component="div"
        className="mt-4 rounded-md p-4 flex items-center justify-center"
        sx={(theme) => ({
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.secondary.main
              : theme.palette.primary.main,
        })}
      >
        <Typography sx={{ color: "white" }}>
          CreatedBy :{" "}
          <Link
            target="_blank"
            color="inherit"
            href="https://github.com/alifcpr"
          >
            Ali Esfahani
          </Link>
        </Typography>
      </Box>
    );
};

export default Footer;
