import { Select } from '@chakra-ui/react'
import React from 'react'

export const Filter = ({
  transactionData,
  filterByKeyword,
  placeholder,
  filteredData,
}) => {
  return (
    // <Box p="8px 40px" border="1px solid #c4c4c4" cursor="pointer">
    <Select
      bg="#98917E"
      color="#fff"
      onChange={(e) => filterByKeyword(filteredData, e.target.value)}
      width="150px"
      cursor="pointer"
      placeholder={placeholder}
    >
      {transactionData?.map((data, i, arr) => {
        //Sort in ascending order and filter to avoid duplicate values
        const prevDate = arr.sort((a, b) => a - b)[i - 1];
        return (
          prevDate !== data && (
            <option key={i} value={data} style={{ color: "#000"}}>
              {data}
            </option>
          )
        );
      })}
    </Select>
    // </Box>
  );
};
