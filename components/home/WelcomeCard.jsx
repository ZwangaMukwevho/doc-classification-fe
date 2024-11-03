import React from "react";
import Link from "next/link";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export const WelcomeCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card isFooterBlurred className="w-full lg:h-[650px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Organise your work</p>
        <h4 className="text-white/90 font-medium text-xl">Automatically organise all your Gmail attachments into your preffered Google Drive directory with Document-Classification</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="../../../images/documents_card.png"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://nextui.org/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Doc-Classification</p>
            <p className="text-tiny text-white/60">Organises your work</p>
          </div>
        </div>
        <Button radius="full" size="sm">Get Started</Button>
      </CardFooter>
    </Card>
    </div>
   
  );
}
