import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Box, Divider, Text } from '@chakra-ui/react'

import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { Slide } from '../components/Slide'

import { api } from '../services/api'

interface HomePros {
  continents: {
    slug: string
    name: string
    summary: string
    slideImage: string
  }[]
}

const Home: NextPage<HomePros> = ({ continents }) => {
  return (
    <>
    <Head>
      <title>Início | WorldTrip</title>
    </Head>

    <Banner />
    <TravelTypes />

    <Divider w={['60px', '90px']} mx="auto" borderColor="gray.700" />

    <Box py={['8', '8', '8', '10']}>
      <Text
        mb={['8', '8', '8', '10']}
        textAlign="center"
        fontSize={['xl', '2xl', '2xl', '3xl', '4xl']}
        fontWeight="medium"
      >
        Vamos nessa?<br />Então escolha seu continente
      </Text>

      <Slide continents={continents} />
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get(`/continents`)

  const { data } = response

  return {
    props: {
      continents: data
    }
  }
}

export default Home
