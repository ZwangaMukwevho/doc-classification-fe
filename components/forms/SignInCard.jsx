import React, {useState} from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export const SignInCard = ({service,imgSrc}) => {

    const [isLoading, setIsLoading] = useState(false); // State to manage loading state
    const [responseData, setResponseData] = useState(''); // State to store response data


    const handleClick = async () => {
        try {
            setIsLoading(true); // Set loading state to true
            // const url = service == "Gmail" ? "https://doc-classification.co.za/classification/gmail" : "https://doc-classification.co.za/classification/gdrive"
            const url = service == "Gmail" ? "http://localhost:8000/gmail" : "http://localhost:8000/gdrive"
            const response = await fetch(url); // Make the API request
            if (response.ok) {
                // const data = await response.json(); // Parse the response
                const data = await response.text(); // Get the response data as a string
                setResponseData(data); // Store the response data
                window.location.href = data;
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false); // Set loading state to false regardless of success or failure
        }
    };

    return (
        <Card isFooterBlurred isPressable onClick={handleClick} className="w-3/4 h-3/4 col-span-12 sm:col-span-5">
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
            {isLoading && <p>Loading...</p>} {/* Render loading indicator if API call is in progress */}
            </CardFooter>
        </Card>
    );
}
