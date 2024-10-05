"use client"
import React from "react";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  return <div>{search}</div>;
};

export default Search;
