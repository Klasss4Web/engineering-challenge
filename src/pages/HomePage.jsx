import React, { useState } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Filter } from "../components/Filter";
import { SearchInput } from "../components/SearchInput";
import { DataRow } from "../components/DataRow";
import { crypto } from "./queryData";
import FullPageLoader from "../components/fullPageLoader";
import useFetch from "../hooks.js/useFetch";
import { handleSearch } from "../utils/utils";
import { generateData } from "./data";

export const HomePage = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const { data, loading, error } = useFetch(
    "https://graphql.bitquery.io",
    API_KEY,
    crypto
  );

  const [searchedData, setSearchedData] = useState(() => data);

  const dataToMap = searchedData.length > 0 ? searchedData : data;

  const filterByKeyword = (filtered, params) => {
    setSearchedData(filtered(params));
  };

  return (
    <Box p="20px">
      {loading && <FullPageLoader />}
      {error && (
        <Flex
          width="100%"
          height="90vh"
          alignItems="center"
          justifyContent="center"
          overflowX="scroll"
        >
          <Text fontSize="26px" color="red">
            Error Loading Data
          </Text>
        </Flex>
      )}
      {data?.length > 0 && (
        <>
          <SearchInput
            height="50px"
            filterByKeyword={handleSearch}
            data={data}
            setSearchedData={setSearchedData}
          />
          <Flex
            my="20px"
            justifyContent="space-between"
            wrap="wrap"
            width="100%"
          >
            {generateData(data)?.map((generatedData, i) => (
              <Filter
                key={i}
                filterByKeyword={filterByKeyword}
                transactionData={generatedData?.transactionData}
                placeholder={generatedData?.placeholder}
                filteredData={generatedData?.filteredData}
              />
            ))}
          </Flex>
          <Box width="100%" overflowX="scroll">
            {dataToMap?.map((datum, i, arr) => {
              const prevDate = arr[i - 1];

              return (
                <DataRow
                  transactionData={datum}
                  key={i}
                  showDate={prevDate?.date?.date === datum?.date?.date}
                  filterByKeyword={filterByKeyword}
                />
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
};
