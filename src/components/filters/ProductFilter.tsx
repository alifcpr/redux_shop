import { Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";

interface ProductFilterProps extends React.HTMLProps<HTMLDivElement> {
  filters: { title: string; value: string }[];
  btnClasses?: string;
}

const ProductFilter = ({
  filters,
  btnClasses,
  ...props
}: ProductFilterProps) => {
    
  // searchParams
  const [searchParams, setSearchParams] = useSearchParams();
  // category query
  const categoryQuery = searchParams.get("category") ?? "";

  // handle set query to Url
  const setQueryHandler = (value: string) => {
    if (value === categoryQuery) {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      searchParams.set("category", value);
      setSearchParams(searchParams);
    }
  };

  return (
    <div {...props}>
      {filters.map((filter) => {
        const activeFilter = categoryQuery === filter.value;
        return (
          <Button
            className={`w-full ${btnClasses}`}
            onClick={() => setQueryHandler(filter.value)}
            sx={(theme) => ({
              color:
                theme.palette.mode === "dark"
                  ? "white"
                  : activeFilter
                  ? "white"
                  : "black",
              backgroundColor: activeFilter ? theme.palette.primary.main : "",
              ":hover": {
                backgroundColor: activeFilter
                  ? theme.palette.success.main
                  : theme.palette.secondary.dark,
                color: "white",
              },
            })}
          >
            {filter.title}
          </Button>
        );
      })}
    </div>
  );
};

export default ProductFilter;
