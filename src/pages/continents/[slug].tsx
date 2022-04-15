import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Box, Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'

import { Card } from '../../components/Card'
import { Info } from '../../components/Info'

import { api } from '../../services/api'

interface ContinentProps {
  continent: {
    name: string
    description: string
    bannerImage: string
    numberOfCountries: number
    numberOfLanguages: number
    amountMostPopularCities: number
    mostPopularCities: {
      cityName: string
      countryName: string
      countryCode: string
      cityImage: string
    }[]
  }
}

const Continent: NextPage<ContinentProps> = ({ continent }) => {
  const { name, description, bannerImage, numberOfCountries, numberOfLanguages, amountMostPopularCities, mostPopularCities } = continent

  return (
    <>
    <Head>
      <title>{name} | WorldTrip</title>
    </Head>

    <Box
      sx={{
        background: `url(${bannerImage}) center /cover no-repeat`
      }}
      height={['150px', '200px', '250px', '300px', '400px', '500px']}
    >
      <Flex
        justify={['center', 'center', 'center', 'flex-start']}
        align={['center', 'center', 'center', 'flex-end']}
        w="100%"
        maxW="1160"
        h="100%"
        mx="auto"
      >
        <Heading
          mb={['0', '0', '0', '7', '10']}
          px={['0', '0', '0', '4', '0']}
          fontSize={['2xl', '3xl', '4xl', '4xl', '5xl']}
          color="gray.100"
        >
          {name}
        </Heading>
      </Flex>
    </Box>

    <Box w="100%" maxW="1160" mx="auto" py={['6', '8', '10', '14', '20']}>

      <Stack spacing={['6', '8', '10', '14']}>
        <Grid  gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']} px={['4', '4', '4', '4', '0']}>
          <Text
            mb={['4', '4', '4', '0']}
            textAlign="justify"
            fontSize={['sm', 'md', 'lg', 'xl', '2xl']}
            color="gray.700"
          >
            {description}
          </Text>

          <Flex justify={['space-between', 'space-around']} align="center">
            
            <Info
              label="países"
              value={numberOfCountries}
            />

            <Info
              label="línguas"
              value={numberOfLanguages}
            />

            <Info
              label="cidades +100"
              value={amountMostPopularCities}
            />

          </Flex>
        </Grid>

        <Box px={['4', '4', '4', '4', '0']}>
          <Heading
            mb={['4', '4', '6', '10']}
            fontSize={['xl', '2xl', '2xl', '3xl', '4xl']}
            fontWeight="medium"
            color="gray.700"
          >
            Cidades +100
          </Heading>

          <Grid gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']} gap="4" px={['4', '0']}>          
            {mostPopularCities.map((city, index) => <Card key={index} {...city} />)}
          </Grid>
        </Box>
      </Stack>

    </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context

  const response = await api.get(`/continents?slug=${params?.slug}`)

  const { data } = response

  if (data.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      continent: data[0]
    }
  }
}

export default Continent
