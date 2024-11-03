import { Inter } from 'next/font/google'
import { WelcomeCard } from '@/components/home/WelcomeCard'
import { DescriptiveCard } from '@/components/home/DescriptiveCard'
import Who from '@/components/home/WhoCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <DescriptiveCard/>
        <Who/>
    </main>
  )
}