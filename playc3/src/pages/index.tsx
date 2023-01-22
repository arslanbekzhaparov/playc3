import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


const CardMoney = styled.div`

`
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Introducing PlayC3 - the next generation of decentralized streaming. PlayC3 is a revolutionary platform that empowers streamers to take control of their content and monetization. With PlayC3, streamers can leverage the power of blockchain technology to use NFTs to grow their audience and earn money." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </>
  )
}
