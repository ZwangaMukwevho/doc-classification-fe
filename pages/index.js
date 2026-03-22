import { Inter } from 'next/font/google'
import { WelcomeCard } from '@/components/home/WelcomeCard'
import { DescriptiveCard } from '@/components/home/DescriptiveCard'
import Who from '@/components/home/WhoCard'
import { useState } from 'react'

const quotes = [
  "If loving me was so hard and draining, I'm truly sorry for all the weight I added. I know I'm not the easiest to hold, not the easiest to understand. I regret all of the moments I've made it more difficult for you. I'm full of flaws and I'm full of contradictions. I'm sorry for the times I've tested you, I'm sorry for the stress I've caused and the exhaustion I've caused you. Please just know I never meant to cause any of it yet, I hope you see the love I was trying to give you, I'm sorry if loving me felt like a burden. With that said, I want you to know, even though it was hard I cherished every bit of love you've given me, & I'll always be endlessly grateful for you. I love you Tshilidzi",
  "Sometimes you like to ignore me just to get your way, and even though I know deep down you don't really like doing it, I let you have the satisfaction because seeing you get your way makes me smile. Just like how I love being in the driver's seat for you, taking you wherever you need to go. I love you, Tshilidzi.",
  "You have been through so much, and I look at you and see the most incredibly brave woman. You tell me you can't sleep without me on the call, but listening to you rest is my way of being there for you. I want to take some of that burden off your shoulders and share your weight so you can just breathe. I love you, Tshilidzi.",
  "You are such an open book, and I appreciate your honesty more than words can say. It scares me a little that I've met most of your family because of how real this is, but they treat me so well, just like you do. I can't wait to spend the rest of my life buying you KFC dunked wings and listening to Drake with you. I love you, Tshilidzi.",
  "You always get mad at me when I don't smile, but your honesty and the way you keep me grounded always bring a smile to my face. Even when you tell me I'm too grown to be dyeing my hair, I love every bit of your open heart and how much you care for me. I cherish you, Tshilidzi.",
  "When I think about the coming months and our cruise, I just picture giving you the peace you deserve. You are so brave, and you carry so much every day. Let me carry some of that for you while we look out at the ocean together with no distractions. I love you, Tshilidzi.",
  "I know I am a contradiction. I can be so draining, but I hope my silly jokes make up for the heavy days. Every time we end a call and you tell me to wave, it is a beautiful reminder of our connection. Even when you give me the silent treatment, please know I am always waving back at you, reaching for you. I love you, Tshilidzi.",
  "Knowing your family and how warmly they have treated me makes me realize how lucky I am to be part of your world. I promise to always be your chauffeur, to keep the Drake (Best I Ever Had) playing, and to make sure you have your favorite McDonald's chicken nuggets. Your love is a gift. I love you, Tshilidzi.",
  "I am full of flaws, but being trusted by an incredibly brave woman like you makes me want to be better. Whether I am trying to make you laugh with a terrible joke or just sitting with you in silence, I want to share every burden you have. Thank you for being my peace. I love you, Tshilidzi.",
  "Your honesty is so refreshing, and the way you are an open book makes loving you so beautiful. From the late night calls where neither of us wants to hang up, to driving you around, I promise to cherish every part of who you are. Now wave at the screen, because I am waving at you. I love you, Tshilidzi.",
  "I know I have my moments, and sometimes you ignore me just to prove a point, but you have my whole heart. Thank you for being so brave, for opening your life and your family to me, and for loving me just the way I am. I promise to keep making those silly jokes just to hear you laugh. I love you, Tshilidzi."
];

export default function Home({ posts }) {
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    if (current < quotes.length - 1) {
      setCurrent(current + 1)
    }
  }

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6 font-serif text-gray-900">
      <div className="flex min-h-[200px] w-full max-w-lg items-center justify-center text-center">
        <p className="text-2xl italic leading-relaxed duration-500">{quotes[current]}</p>
      </div>

      <div className="mt-10 flex gap-12">
        <button
          onClick={handlePrev}
          disabled={current === 0}
          className={`text-sm uppercase tracking-widest ${
            current === 0 ? 'opacity-20' : 'hover:font-bold'
          }`}
        >
          Back
        </button>

        <span className="text-sm text-gray-400">
          {current + 1} / {quotes.length}
        </span>

        <button
          onClick={handleNext}
          disabled={current === quotes.length - 1}
          className={`text-sm uppercase tracking-widest ${
            current === quotes.length - 1 ? 'opacity-20' : 'hover:font-bold'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  )
}