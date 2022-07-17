import Head from 'next/head'
import Nav from '../src/components/navbar/Nav'
import Info from '../src/components/Info'
import Earn from '../src/components/Earn'
import Ecosystem from '../src/components/Ecosystem'
import FarmBoxes from '../src/components/FarmBoxes'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>FarmToken: Earn Passive Yield on Your Crypto</title>
          <meta name="description" content="The #1 place in  SmartBCH to put your FarmToken asset to work in 'set and forget' fashion!" />
          <link rel="preload" as="image" href="/static_assets/field-placeholder.webp"/>
        </Head>
        <Nav/>
        <main>
          <Info/>
          <Earn/>
          <Ecosystem/>
          <FarmBoxes/>
        </main>
      </div>
      <Footer/>
    </>
  )
}
