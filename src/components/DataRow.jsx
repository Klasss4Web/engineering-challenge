import React, { useId } from "react";

import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import dayjs from "dayjs";

export const DataRow = ({ transactionData, showDate }) => {
  console.log(transactionData, "fff", "iddsss", useId());
  return (
    <>
      {/* <Flex border="1px solid #c4c4c4" py="20px" justifyContent="space-between">
      <Text ml="20px">Title One</Text>
      <Text ml="20px">Title One</Text>
      <Text ml="20px">Title One</Text>
      <Text ml="20px">Title One</Text>
      <Text ml="20px">Title One</Text>
      <Text ml="20px">Title One</Text>
      <Text ml="20px">Title One</Text>
    </Flex> */}
      {!showDate && (
        <Box
          width="170px"
          p="15px 40px"
          border="1px solid #c4c4c4"
          borderRadius="10px"
          cursor="pointer"
          mt="50px"
          mb="20px"
          bg="#e4dbdb"
        >
          <Text>{dayjs(transactionData?.date?.date).format("YYYY-MM-DD")}</Text>
        </Box>
      )}
      <Flex
        width="100%"
        border="1px solid #c4c4c4"
        mb="15px"
        borderRadius="10px"
        p="20px"
        justifyContent="space-between"
        className="parent-flex"
      >
        <Text width="100px">id{useId()}</Text>
        <Tooltip label={transactionData?.__typename}>
          <Text width="200px" className="truncate">
            {transactionData?.__typename}
          </Text>
        </Tooltip>
        <Tooltip label={transactionData?.total}>
          <Text width="100px" mx="20px" className="truncate">
            {transactionData?.total}
          </Text>
        </Tooltip>
        <Tooltip label={transactionData?.currency?.address}>
          <Text width="200px" className="truncate" mx="20px">
            {transactionData?.currency?.address}
          </Text>
        </Tooltip>
        <Tooltip label={transactionData?.currency?.name}>
          <Text width="120px" mx="20px" className="truncate">
            {transactionData?.currency?.name}
          </Text>
        </Tooltip>
        {/* <Text width="60px" mx="20px">
          {transactionData?.currency?.symbol}
        </Text> */}
        <Text width="70px" mx="20px">
          {transactionData?.currency?.tokenType}
        </Text>
        {/* <Text width="50px" mx="20px">
          {transactionData?.currency?.decimals}
        </Text> */}
        <Text width="80px" mx="20px">
          {transactionData?.block?.height}
        </Text>
        <Tooltip
          label={dayjs(transactionData?.block?.timestamp?.time).format(
            "hh:mm:ss a"
          )}
        >
          <Text width="140px" mx="20px" className="truncate">
            {dayjs(transactionData?.block?.timestamp?.time).format(
              "hh:mm:ss a"
            )}
          </Text>
        </Tooltip>
        {/* <Text width="50px" mx="20px">
          {transactionData?.count}
        </Text> */}
        {/* <Text width="50px" mx="20px">
          {transactionData?.countBigInt}
        </Text> */}
        {/* <Text width="50px" mx="20px">
          {transactionData?.gasValue}
        </Text> */}
        <Tooltip label={transactionData?.sender?.address}>
          <Text width="200px" className="truncate" mx="10px">
            {transactionData?.sender?.address}
          </Text>
        </Tooltip>
        <Tooltip label={transactionData?.receiver?.address}>
          <Text width="200px" className="truncate" mx="20px">
            {transactionData?.receiver?.address}
          </Text>
        </Tooltip>
        {/* <Text width="60px" ml="10px">
          {transactionData?.success ? "true" : "false"}
        </Text> */}
      </Flex>
    </>
  );
};
