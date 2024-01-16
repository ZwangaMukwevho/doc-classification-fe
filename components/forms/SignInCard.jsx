import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export const SignInCard = () => {
    return (
      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={'sign in'}
            className="w-full object-cover h-[140px]"
            src={'public/vercel.svg'}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{'Sign to Gmail'}</b>
          <p className="text-default-500">{'R29'}</p>
        </CardFooter>
      </Card>
    );
    
}