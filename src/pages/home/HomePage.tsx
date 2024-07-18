import { Box, Grid, Paper, Skeleton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useEffect } from "react";
import { fetchAllProduct } from "../../redux/slices/productsSlice";
import ProductCart from "../../components/carts/ProductCart";
import { v4 as uuidv4 } from "uuid";
import Search from "../../components/Search";
import ProductFilter from "../../components/filters/ProductFilter";
import { categoryList } from "../../constant";

const HomePage = () => {
  // dispatch
  const dispatch: AppDispatch = useDispatch();

  // products
  const { productList, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  // dispatch fetchAllProduct when mount component
  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);

  return (
    <Grid container gap={2} className="mt-4">
      <Grid item xs={12} md={10}>
        <Paper className="p-3 grid grid-cols-12 gap-4">
          <div className="w-full col-span-12">
            <Search query="search" />
          </div>
          {/* show loading */}
          {loading &&
            !error &&
            Array.from({ length: 8 }).map(() => (
              <Skeleton
                variant="rectangular"
                key={uuidv4()}
                className="col-span-12 rounded-md md:col-span-6 xl:col-span-4 2xl:col-span-3 h-[488px]"
              />
            ))}
          {/* show error */}
          {!loading && error && <Typography variant="h1">{error}</Typography>}
          {/* show item */}
          {!loading && productList && productList.length > 0 ? (
            productList.map((product) => (
              <ProductCart key={uuidv4()} data={product} />
            ))
          ) : (
            <Typography variant="h1">There is not any item</Typography>
          )}
        </Paper>
      </Grid>
      <Grid
        className="relative order-first md:order-last"
        item
        xs={12}
        md={1.897}
      >
        <Paper className="sticky top-3 left-0 p-1">
          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.secondary.main
                  : theme.palette.secondary.light,
            })}
            className="rounded-md p-2"
          >
            <Typography variant="body1" className="mb-2">
              Category{" "}
            </Typography>
            <ProductFilter
              btnClasses="flex items-center justify-start px-2"
              className="flex flex-col items-end gap-y-2"
              filters={categoryList}
            />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
