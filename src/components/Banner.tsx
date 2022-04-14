import { Box, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box sx={{ background: 'url(/background.png) no-repeat', backgroundSize: 'cover' }}>
      <Flex justify="space-between" align="center" w="100%" maxW="1160" mx="auto" py="10" px="10">
        <Box>
          <Heading
            fontSize={['xl','3xl','3xl','3xl','4xl']}
            fontWeight="medium"
            color="gray.100"
          >
            5 Continentes,<br /> infinitas possibilidades.
          </Heading>
          <Text
            w={['auto', 'auto', 'auto', '500px','600px']}
            mt={['2', '4']}
            fontSize={['sm', 'lg', 'lg', 'lg', 'xl']}
            color="gray.300"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        {isWideVersion && <Image src="/airplane.svg" mb="-16" width={['auto', 'auto', '360px', '360px','auto']} alt="" />}
      </Flex>
    </Box>
  )
}