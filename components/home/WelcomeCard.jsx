import React from "react";
import Link from "next/link";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export const WelcomeCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card
          isFooterBlurred
          radius="lg"
          className="border-none w-80 h-80 relative"
        >
          <Image
            alt="Woman listening to music"
            className="object-cover"
            height={200}
            src="/images/hero-card.jpeg"
            width={200}
          />
      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-2 left-3 right-3 mx-auto w-75 shadow-small z-10 flex flex-row justify-space-evenly items-center text-center">
        <p className="text-tiny text-white/80 mr-3">Welcome to Document Classify.</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          <Link href='/categories'> 
            Get Started
          </Link>
        </Button>
      </CardFooter>
      </Card>
    </div>
   
  );
}
