import { Flex, Spinner } from "@chakra-ui/react"

export default function FullPageLoader({ bg, h }) {
  return (
    <Flex
      bg={bg ? bg : "#fff"}
      justifyContent="center"
      alignItems="center"
      height={h ? h : "100vh"}
      width="100%"
    >
      <Spinner color={"blue"} w="50px" h="50px" speed="0.65s" />
    </Flex>
  )
}
