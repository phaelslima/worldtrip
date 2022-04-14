import type { NextPage } from 'next'
import Head from 'next/head'

import { Banner } from '../components/Banner'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Início | WorldTrip</title>
    </Head>

    <Banner />
    </>
  )
}

export default Home
