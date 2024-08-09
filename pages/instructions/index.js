
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Instructions() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center overflow-auto lg:mx-10 xl:mx-72">
            <div className="h-1/2 flex-1 w-full flex items-center justify-center">
                <Card className="w-full border-none bg-transparent shadow-none">
                    <div className="flex items-center h-full">
                        <CardBody className="overflow-visible py-2 flex justify-start items-start w-1/2">
                            <Image
                                alt="Card background"
                                className="object-cover sm:h-96 h-64 rounded-xl"
                                src='../../../images/iPhone_15_Pro_categories.png'
                            />
                        </CardBody>
                        <CardHeader className="pb-0 pt-2 px-4 flex flex-col justify-center items-end w-1/2 text-right">
                            <p className="text-tiny xl:text-base uppercase font-bold">Set up categories</p>
                            <small className="text-default-500 xl:text-lg">Only limited to 7</small>
                            <h4 className="font-bold text-large xl:text-2xl">Step 1</h4>
                        </CardHeader>
                    </div>
                </Card>
            </div>
            <div className="h-1/2 flex-1 w-full flex items-center justify-center">
                <Card className="w-full border-none bg-transparent shadow-none">
                    <div className="flex items-center h-full">
                        <CardHeader className="pb-0 pt-2 px-4 flex flex-col justify-center items-start w-6/10">
                            <p className="text-tiny xl:text-base uppercase font-bold">Sign In To Gmail & Gdrive</p>
                            <small className="text-default-500 xl:text-lg">Click on the card</small>
                            <h4 className="font-bold text-large xl:text-2xl">Step 2</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 flex justify-end items-end w-4/10">
                            <Image
                                alt="Card background"
                                className="object-cover sm:h-96 h-64 rounded-xl"
                                src='../../../images/iPhone_15_Pro_auth.png'
                            />
                        </CardBody>
                    </div>
                </Card>
            </div>
            <div className="h-1/2 flex-1 w-full flex items-center justify-center">
                <Card className="w-full border-none bg-transparent shadow-none">
                    <div className="flex items-center h-full">
                        <CardBody className="overflow-visible py-2 flex justify-start items-start w-5/10">
                            <Image
                                alt="Card background"
                                className="object-cover sm:h-96 h-64 rounded-xl"
                                src='../../../images/iPhone_15_pro_sign_up.png'
                            />
                        </CardBody>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col justify-center items-start w-5/10 text-right">
                            <p className="text-tiny xl:text-base uppercase font-bold">Authenticate with Google</p>
                            <small className="text-default-500 xl:text-lg">Gmail account</small>
                            <small className="text-default-500 xl:text-lg">Gdrive account</small>
                            <h4 className="font-bold text-large xl:text-2xl">Step 3</h4>
                        </CardHeader>
                    </div>
                </Card>
            </div>
            <div className="h-1/2 flex-1 w-full flex items-center justify-center">
                <Card className="w-full border-none bg-transparent shadow-none">
                    <div className="flex items-center h-full">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start w-6/10">
                            <p className="text-tiny xl:text-base uppercase font-bold">Submit</p>
                            <small className="text-default-500 xl:text-lg">Click submit button</small>
                            <h4 className="font-bold text-large xl:text-2xl">Step 4</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 flex justify-end items-end w-4/10">
                            <Image
                                alt="Card background"
                                className="object-cover sm:h-96 h-64 rounded-xl"
                                src='../../../images/iPhone_15_Pro_Submit.png'
                            />
                        </CardBody>
                    </div>
                </Card>
            </div>
        </div>
    );
}