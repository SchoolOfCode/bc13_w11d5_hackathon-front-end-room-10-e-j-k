import React, { useContext } from "react";
import { searchContext } from "../searchContext";

export default function SearchedList() {
  const { search, setSearch } = useContext(searchContext);
  console.log(search);
  return <div></div>;
}
