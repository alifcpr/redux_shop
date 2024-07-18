import { Grid, Paper, Skeleton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useEffect } from "react";
import { fetchAllProduct } from "../../redux/slices/productsSlice";
import ProductCart from "../../components/carts/ProductCart";
import { v4 as uuidv4 } from "uuid";
import Search from "../../components/Search";
import HomePageSideBar from "../../components/HomePageSideBar";

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
        className="relative order-first lg:order-last"
        item
        xs={12}
        md={1.8}
      >
        <Paper className="sticky top-3 left-0 p-1">
          <HomePageSideBar />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
