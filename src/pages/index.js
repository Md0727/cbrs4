// import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProductCard from '../components/ProductCard'
import Pricing from '@/components/Pricing'
import SupportCenter from './support-center'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <ProductCard />
        <Pricing />
        <SupportCenter />
        <Contact />
    </main>
  )
}
