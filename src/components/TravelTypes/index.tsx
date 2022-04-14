import { Flex } from "@chakra-ui/react";

import { Type } from "./Type";

export function TravelTypes() {
  return (
    <Flex justify={['center', 'center', 'center', 'space-between']} wrap="wrap" w="100%" maxW="1160" mx="auto" py={['6', '6', '12', '14', '20']} >

      <Type
        title='vida noturna'
        imgURL='/cocktail.svg'
      />

      <Type
        title='praia'
        imgURL='/surf.svg'
      />
      
      <Type
        title='moderno'
        imgURL='/building.svg'
      />

      <Type
        title='clássico'
        imgURL='/museum.svg'
      />

      <Type
        title='e mais...'
        imgURL='/earth.svg'
      />

    </Flex>
  )
}