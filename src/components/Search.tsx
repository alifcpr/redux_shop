import { TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface SearchProps {
  query: string;
}

const Search = ({ query }: SearchProps) => {
  // searchParams
  const [searchParams, setSearchParams] = useSearchParams();
  // inputValue state
  const [inputValue, setInputValue] = useState(searchParams.get(query) ?? "");

  // handle inputValue change
  const inputValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // setQuery in url
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (inputValue.length > 0) {
        searchParams.set(query, inputValue);
        setSearchParams(searchParams);
      } else {
        searchParams.delete(query);
        setSearchParams(searchParams);
      }
    }, 900);
    return () => clearTimeout(debounce);
  }, [inputValue]);

  return (
    <TextField
      size="small"
      id="outlined-basic"
      label="search"
      className="w-full"
      autoComplete="off"
      variant="filled"
      color="error"
      defaultValue={inputValue}
      onChange={inputValueChangeHandler}
    />
  );
};

export default Search;
