import Link from 'next/link'
import { useRouter } from 'next/router'

import { Box, Flex, Icon, IconButton, Image } from '@chakra-ui/react'
import { IoIosArrowBack } from 'react-icons/io'

export function Header() {
  const { asPath } = useRouter()

  return (
    <Box>
      <Box position="relative" w="100%" maxW="1160" h={[50, 75, 75, 100]} mx="auto">
        <Flex as="header" justify="center" align="center" w="100%" h="100%">
          {asPath !== '/' && (
            <Link href="/" passHref>
              <IconButton
                position="absolute"
                left="0"
                aria-label="Voltar para Home"
                icon={<Icon as={IoIosArrowBack} fontSize={[16, 20]} />}
              />
            </Link>
          )}
          <Image src='/logo.svg' alt="Logo do site" w={[82, 135, 135, 'auto']} mx="auto" />
        </Flex>
      </Box>
    </Box>
  )
}