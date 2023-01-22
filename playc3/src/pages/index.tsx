import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import styled, { keyframes, css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import CardBuy from '@images/Card_Buy.svg'

const inter = Inter({ subsets: ['latin'] })

const Navbar = styled.div`
  position: relative;
  width: 100;
  height: 97px;
  left: 0px;
  background: black;
`

const CardMoney = styled.div`
  position: absolute;
  width: 309px;
  height: 695px;
  left: 25px;
  // top: 165px;

  background: #171717;
  border-radius: 25px;

`
export default function Home() {
  return (
    <>
      <Head>
        <title>playc3</title>
        <meta name="description" content="Introducing PlayC3 - the next generation of decentralized streaming. PlayC3 is a revolutionary platform that empowers streamers to take control of their content and monetization. With PlayC3, streamers can leverage the power of blockchain technology to use NFTs to grow their audience and earn money." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>

      </Navbar>
      <CardMoney>
        <Image
          src = {CardBuy}
          alt = {"Available Asset"}
        />  
      </CardMoney>
    </>
  )
}
