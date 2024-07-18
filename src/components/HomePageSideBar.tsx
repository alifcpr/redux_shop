import { Box, Button, SwipeableDrawer, Typography } from "@mui/material";
import { categoryList } from "../constant";
import ProductFilter from "./filters/ProductFilter";
import { useState } from "react";

const HomePageSideBar = () => {
  // drawer state
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <Box component="aside">
      <Box className="block lg:hidden">
        <Button
          color="primary"
          variant="contained"
          className="w-full"
          onClick={() => setDrawerOpen(true)}
        >
          Filters
        </Button>
        <SwipeableDrawer
          anchor={"bottom"}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onOpen={() => setDrawerOpen(true)}
        >
          <Box component="div" className="p-4 flex flex-col">
            <Typography variant="body1" className="mb-2 uppercase font-bold">
              category
            </Typography>
            <ProductFilter
              btnClasses="flex items-center justify-start px-2"
              className="flex flex-col items-end gap-y-2"
              filters={categoryList}
            />
            <Button
              onClick={() => setDrawerOpen(false)}
              color="error"
              variant="contained"
              className="mt-3"
            >
              Close
            </Button>
          </Box>
        </SwipeableDrawer>
      </Box>

      <Box
        component="div"
        sx={(theme) => ({
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.secondary.main
              : theme.palette.secondary.light,
        })}
        className="rounded-md p-2 hidden lg:block"
      >
        <Typography variant="body1" className="mb-2">
          Category
        </Typography>
        <ProductFilter
          btnClasses="flex items-center justify-start px-2"
          className="flex flex-col items-end gap-y-2"
          filters={categoryList}
        />
      </Box>
    </Box>
  );
};

export default HomePageSideBar;
