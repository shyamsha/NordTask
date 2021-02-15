import React from "react";
import { Input } from "antd";

const { Search } = Input;

interface Props {
  searchQueryInput: (name:string) => void;
  searchQuery:string;
}

function SearchInput(props: Props) {
  const { searchQueryInput } = props;
  return (
    <div>
        <Search
          placeholder="Search people"
          enterButton="Search"
          size="large"
          onSearch={(query)=>searchQueryInput(query)}
        />
    </div>
  );
}

export default SearchInput;
