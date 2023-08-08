import Myheader from '@/_components/Myheader'
import Mymenu from '@/_components/Mymenu'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='header'>
        <Myheader />
      </div>
      <div className='menu'>
        <Mymenu />
      </div>
    </>
  )
}
