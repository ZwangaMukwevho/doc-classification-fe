import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export const SignInCard = ({service,imgSrc}) => {
    return (
        <Card isFooterBlurred isPressable className="w-3/4 h-3/4 col-span-12 sm:col-span-5">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">Sign In</p>
                <h4 className="text-black font-medium text-2xl">{service}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={imgSrc}
                />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
                <p className="text-black text-tiny">Click to sign in.</p>
            </div>
            {/* <Button className="text-tiny" color="primary" radius="full" size="sm">
                Sign in
            </Button> */}
            </CardFooter>
        </Card>
    );
    
}