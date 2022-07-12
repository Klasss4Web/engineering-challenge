import React, { useState } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Filter } from "../components/Filter";
import { SearchInput } from "../components/SearchInput";
import { DataRow } from "../components/DataRow";
import { crypto } from "./queryData";
import FullPageLoader from "../components/fullPageLoader";
import dayjs from "dayjs";
import useFetch from "../hooks.js/useFetch";
import { handleSearch } from "../utils/utils";

export const HomePage = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const { data, loading, error } = useFetch(
    "https://graphql.bitquery.io",
    API_KEY,
    crypto
  );
  const [searchedData, setSearchedData] = useState(() => data);

  const mapdata = searchedData.length > 0 ? searchedData : data;

  const filterByKeyword = (filtered, params) => {
    setSearchedData(filtered(params));
  };

  // const handleSearch = (event) => {
  //   let value = event.target.value.toLowerCase();
  //   let result = [];
  //   result = data?.filter((datum) => {
  //     return (
  //       datum?.block?.timestamp?.time.toLowerCase().includes(value) ||
  //       String(datum?.total).includes(value)
  //     );
  //   });
  //   return setSearchedData(result);
  // };


  return (
    <Box p="20px">
      {loading && <FullPageLoader />}
      {error && (
        <Flex
          width="100%"
          height="90vh"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="26px" color="red">
            Error Loading Data
          </Text>
        </Flex>
      )}
      {data.length > 0 && (
        <>
          <SearchInput height="50px" filterByKeyword={handleSearch} data={data} setSearchedData={setSearchedData} />
          <Flex
            my="20px"
            justifyContent="space-between"
            wrap="wrap"
            width="100%"
          >
            <Filter
              filterByKeyword={filterByKeyword}
              transactionData={data?.map((datum, i) => dayjs(datum?.date?.date).format("YYYY-MM-DDDD"))}
              dataToFilter={data}
              placeholder={"Filter by date"}
              filteredData={(params) =>
                data?.filter((datum) =>dayjs(datum?.date?.date).format("YYYY-MM-DD") === params)
              }
            />
            <Filter
              filterByKeyword={filterByKeyword}
              transactionData={data?.map((datum, i) =>
                parseInt(datum?.total).toFixed(0)
              )}
              placeholder={"Filter by total token"}
              filteredData={(params) =>
                data?.filter(
                  (datum) =>
                    parseInt(datum?.total).toFixed(0) ===
                    parseInt(params).toFixed(0)
                )
              }
            />
            <Filter
              filterByKeyword={filterByKeyword}
              transactionData={data?.map((datum, i) => datum?.block?.height)}
              placeholder={"Filter by block height"}
              filteredData={(params) =>
                data?.filter(
                  (datum) =>
                    parseInt(datum?.block?.height).toFixed(0) ===
                    parseInt(params).toFixed(0)
                )
              }
            />
            <Filter
              filterByKeyword={filterByKeyword}
              transactionData={data?.map((datum, i) =>
                dayjs(datum?.block?.timestamp?.time).format("hh:mm a")
              )}
              placeholder={"Filter by tx time"}
              filteredData={(params) =>
                data?.filter(
                  (datum) =>
                    dayjs(datum?.block?.timestamp?.time).format("hh:mm a") ===
                    params
                )
              }
            />
            <Filter
              filterByKeyword={filterByKeyword}
              transactionData={data?.map((datum, i) => datum?.sender?.address)}
              placeholder={"Filter by sender address"}
              filteredData={(params) =>
                data?.filter((datum) => datum?.sender?.address === params)
              }
            />
            <Filter
              filterByKeyword={filterByKeyword}
              transactionData={data?.map(
                (datum, i) => datum?.receiver?.address
              )}
              placeholder={"Filter by receiver address"}
              filteredData={(params) =>
                data?.filter((datum) => datum?.receiver?.address === params)
              }
            />
          </Flex>
          <Box>
            {mapdata?.map((datum, i, arr) => {
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
