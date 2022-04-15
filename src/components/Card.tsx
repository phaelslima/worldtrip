import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

interface CardProps {
  cityName: string
  countryName: string
  countryCode: string
  cityImage: string
}

export function Card({ cityName, countryName, countryCode, cityImage }: CardProps) {
  return (
    <Box>
      <Image src={cityImage} alt="" w="100%" h="175px" objectFit='cover' borderTopRadius="lg" />
      
      <Flex justify="space-between" align="center" p="6" bg="white" borderWidth="1px" borderTopWidth="0" borderColor="yellow.300" borderBottomRadius="lg">
        <Box>
          <Text isTruncated maxW="150px" fontSize={['md', 'lg', 'xl']} fontWeight="semibold" color="gray.700">{cityName}</Text>
          <Text isTruncated maxW="150px" fontSize={['sm', 'md', 'lg']} fontWeight="medium" color="gray.500">{countryName}</Text>
        </Box>

        <ReactCountryFlag
          style={{
            fontSize: '2em',
            lineHeight: '2em',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
          aria-label={countryName}
          countryCode={countryCode}
          svg 
        />
      </Flex>
    </Box>
  )
}