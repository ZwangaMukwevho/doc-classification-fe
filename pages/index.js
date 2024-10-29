import { Inter } from 'next/font/google'
import { WelcomeCard } from '@/components/home/WelcomeCard'
import { DescriptiveCard } from '@/components/home/DescriptiveCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <DescriptiveCard/>
    </main>
  )
}