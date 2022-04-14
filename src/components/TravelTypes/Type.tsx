import { Box, Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { VscCircleFilled } from 'react-icons/vsc'

interface TypeProps {
  title: string
  imgURL: string
}

export function Type({ title, imgURL}: TypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })

  if (isWideVersion) {
    return (
      <Box w={['250px', '200px', '250px', '190px']} py="4">
        <Image src={imgURL} alt={`Imagem de viagems do tipo ${title}`} mx="auto" mb="3" w={['65px', '65px', '65px', '65px', 'auto']} />
        <Text textAlign="center" fontWeight="semibold" fontSize={['lg', 'lg', 'xl', 'xl', '2xl']} color="gray.700">{title}</Text>
      </Box>
    )
  }

  return (
    <Flex align="center" py="3" px="6">
      <Icon as={VscCircleFilled} color="yellow.400" />
      <Text textAlign="center" fontWeight="semibold" fontSize={['lg', 'xl']} color="gray.700">{title}</Text>
    </Flex>
  )
}