import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import styled, { keyframes, css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import CardBuy from '@images/Card_Buy.svg'
import Logo from '@images/Logo.svg'
import Profile from '@images/Profile.svg'
import Search from '@images/Search.svg'
import Ploo from '@images/Ploo.svg'
import ChatImg from '@images/Chat.svg'
import Views from '@images/ViewCount.svg'


const inter = Inter({ subsets: ['latin'] })

const Navbar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  width: 100;
  height: 97px;
  background: black;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 25px;
  padding-left: 100px;
  z-index: -999;
`

const SearchBar = styled.div`
  position: absolute;
  width: 462px;
  height: 43px;
  left: 370px;
  display: flex;
  flex-direciton: column;
  margin-left: 150px;
  top: 27px;

  border-radius: 25px;
`

 const LogoBox = styled.div`
  position: absolute;
  height: 50px;
  top: 7px;
  widht: 50px;
  right: 50px;
  margin-right: 107px;
  transform: scale(0.7);
 `

const CardMoney = styled.div`
  position: absolute;
  top: 97px;
  width: 309px;
  height: 695px;
  left: 25px;
  margin-right: 25px;
  // top: 165px;

  background: #171717;
  border-radius: 25px;

`

const StreamWindow = styled.div`
  position: absolute;
  width: 782px;
  height: 435px;
  left: 352px;
  top: 97px;

  background: #171717;
  border-radius: 30px;
`

const Discription = styled.div`
  position: absolute;
  width: 782px;
  height: 272px;
  left: 352px;
  top: 552px;

  background: #171717;
  border-radius: 25px;
`

const ViewCount = styled.div`
  position: absolute;
  width: 309px;
  height: 240px;
  left: 1153px;
  top: 97px;

  background: #171717;
  border-radius: 25px;
`

const Chat = styled.div`
  position: absolute;
  width: 309px;
  height: 433px;
  left: 1153px;
  top: 357px;

  background: #171717;
  border-radius: 25px;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -999;
  background-color: black;
`
export default function Home() {
  return (
    <>
      <Head>
        <title>Playc3</title>
        <meta name="description" content="Introducing PlayC3 - the next generation of decentralized streaming. PlayC3 is a revolutionary platform that empowers streamers to take control of their content and monetization. With PlayC3, streamers can leverage the power of blockchain technology to use NFTs to grow their audience and earn money." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background>
        <SearchBar>
          <Image
                src = {Search}
                alt = {"Search Bar"}
            />
        </SearchBar>
        <Navbar>
          <Image
              src = {Logo}
              alt = {"Logo"}
              width={150}
              height={150}
          />
        </Navbar>
        <LogoBox>
          <Image
              src = {Profile}
              alt = {"Profile"}
              width={100}
              height={100}
            />
        </LogoBox>
        <CardMoney>
          <Image
            src = {CardBuy}
            alt = {"Available Asset"}
          />  
        </CardMoney>
        <StreamWindow>
          
        </StreamWindow>
        <Discription>
        <Image
            src = {Ploo}
            alt = {"Ploo discription"}
          />  
        </Discription>
        <ViewCount>
          <Image
              src = {Views}
              alt = {"Views"}
            />
        </ViewCount>
        <Chat>
          <Image
            src = {ChatImg}
            alt = {"Chat"}
          />
        </Chat>
      </Background>
    </>
  )
}
