import { Inter } from 'next/font/google'
import { WelcomeCard } from '@/components/home/WelcomeCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <WelcomeCard/>
    </main>
  )
}