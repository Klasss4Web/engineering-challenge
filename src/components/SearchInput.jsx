import { Box, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export const SearchInput = ({ filterByKeyword, data, setSearchedData }) => {
  const [keyword, setKeyWord] = useState("");

  return (
    <Box>
      <Input
        bg="#DCEBFA"
        h="60px"
        value={keyword}
        placeholder="Search by date, time or total tokens"
        onChange={(e) => {
          filterByKeyword(e, data, setSearchedData);
          setKeyWord(e.target.value);
        }}
      />
    </Box>
  );
};
