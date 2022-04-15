import Link from "next/link";

import { Flex, Heading, Text } from "@chakra-ui/react";

interface ItemProps {
  slug: string
  name: string
  summary: string
  slideImage: string
}

export function Item({ slug, name, summary, slideImage }: ItemProps) {
  return (
    <Link href={`/continents/${slug}`} passHref>
      <a>
        <Flex
          sx={{
            background: `linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${slideImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          h={['250px', '300px', '350px', '400px', '450px']}
          justify="center"
          align="center"
          direction="column"
          cursor="pointer"
        >
          <Heading mb="3" fontSize={['2xl', '3xl', '3xl', '4xl', '5xl']} fontWeight="bold" color="gray.100">{name}</Heading>
          <Text fontSize={['sm', 'lg', 'lg', 'xl', '2xl']} fontWeight="bold" color="gray.300">{summary}</Text>
        </Flex>
      </a>
    </Link>
  )
}