import type { NextPage } from 'next'
import Head from 'next/head'

import { Divider } from '@chakra-ui/react'

import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Início | WorldTrip</title>
    </Head>

    <Banner />
    <TravelTypes />

    <Divider w={['60px', '90px']} mx="auto" borderColor="gray.700" />
    </>
  )
}

export default Home
