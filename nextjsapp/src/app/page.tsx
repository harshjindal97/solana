"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { WallettAdapter } from './component/page'
import { Card } from './component/card'
import { AppBar } from './component/appBar'
import { MovieList } from './component/movielist'
// import { Ping } from './component/pingButton'
export default function Home() {
  return (
    <div>
      <WallettAdapter>
        <AppBar/>
        {/* <Ping/> */}
        <Card/>
        <MovieList/>
      </WallettAdapter>
    </div>
  )
}
