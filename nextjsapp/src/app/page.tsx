"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { WallettAdapter } from './component/page'
import { Card } from './component/card'
import { AppBar } from './component/appBar'
// import { Ping } from './component/pingButton'
const MOVIE_REVIEW_PROGRAM_ID = 'CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN'
export default function Home() {
  return (
    <div>
      <WallettAdapter>
        <AppBar/>
        {/* <Ping/> */}
        <Card/>
      </WallettAdapter>
    </div>
  )
}
