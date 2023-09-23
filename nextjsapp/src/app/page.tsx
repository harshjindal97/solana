"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { WallettAdapter } from './component/page'
import { AppBar } from './component/appBar'
import { Ping } from './component/pingButton'

export default function Home() {
  return (
    <div>
      <WallettAdapter>
        <AppBar/>
        <Ping/>
      </WallettAdapter>
    </div>
  )
}
