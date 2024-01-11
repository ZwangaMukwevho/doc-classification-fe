import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar'
import Layout from '@/components/layout/Layout'
import { WelcomeCard } from '@/components/home/WelcomeCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="dark text-foreground bg-background">
      <NavBar></NavBar>
      <Layout>
        <WelcomeCard/>
      </Layout>
    </main>
  )
}
