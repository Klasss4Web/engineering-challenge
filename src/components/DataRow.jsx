import React, { useId } from "react";

import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import dayjs from "dayjs";

export const DataRow = ({ transactionData, showDate }) => {
  return (
    <>
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
        justifyContent="space-between"
        direction={["column", "column", "row"]}
      >
        <Flex
          width={["100%", "100%", "8%"]}
          justifyContent="center"
          alignItems="center"
          border="1px solid #c4c4c4"
          mb="15px"
          borderRadius="10px"
          p="20px"
          bg="#D8EDD4"
          // className="parent-flex"
        >
          <Text>id{useId()}</Text>
        </Flex>
        <Flex
          direction={["column", "column", "row"]}
          width={["100%", "100%", "90%"]}
          border="1px solid #c4c4c4"
          mb="15px"
          borderRadius="10px"
          p="20px"
          justifyContent={["flex-start", "flex-start", "space-between"]}
          bg="#b9d9d7"
        >
          <Tooltip label={transactionData?.__typename}>
            <Text width="200px" className="truncate">
              {transactionData?.__typename}
            </Text>
          </Tooltip>
          <Tooltip label={transactionData?.total}>
            <Text width="100px" mx={["0", "0", "20px"]} className="truncate">
              {transactionData?.total}
            </Text>
          </Tooltip>
          <Tooltip label={transactionData?.currency?.address}>
            <Text width="200px" className="truncate" mx={["0", "0", "20px"]}>
              {transactionData?.currency?.address}
            </Text>
          </Tooltip>
          <Tooltip label={transactionData?.currency?.name}>
            <Text width="120px" mx={["0", "0", "20px"]} className="truncate">
              {transactionData?.currency?.name}
            </Text>
          </Tooltip>
          <Text width="70px" mx={["0", "0", "20px"]}>
            {transactionData?.currency?.tokenType}
          </Text>

          <Tooltip
            label={dayjs(transactionData?.block?.timestamp?.time).format(
              "hh:mm:ss a"
            )}
          >
            <Text width="140px" mx={["0", "0", "20px"]} className="truncate">
              {dayjs(transactionData?.block?.timestamp?.time).format(
                "hh:mm:ss a"
              )}
            </Text>
          </Tooltip>

          <Tooltip label={transactionData?.sender?.address}>
            <Text width="200px" className="truncate" mx={["0", "0", "20px"]}>
              {transactionData?.sender?.address}
            </Text>
          </Tooltip>
          <Tooltip label={transactionData?.receiver?.address}>
            <Text width="200px" className="truncate" mx={["0", "0", "20px"]}>
              {transactionData?.receiver?.address}
            </Text>
          </Tooltip>
          <Text width="60px" ml={["0", "0", "10px"]} color="green">
            {transactionData?.success ? "Success" : "Failed"}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
