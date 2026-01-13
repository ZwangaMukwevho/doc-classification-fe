import { Accordion, AccordionItem, Avatar } from "@heroui/react";
import { useEffect, useState } from "react";

export default function Users() {

    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const url = "https://doc-classification.co.za/classification/names";
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const text = await response.text();
                const data = JSON.parse(text);
                console.log('data: ',data)
                setUserData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Accordion variant="shadow">
                {Object.entries(userData).map(([id, name]) => (
                        <AccordionItem
                            key={id}
                            aria-label={name}
                            startContent={
                                <Avatar
                                    isBordered
                                    color="primary"
                                    radius="lg"
                                    src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"}
                                />
                            }
                            subtitle=""
                            title={name}
                        />
                    ))}
            </Accordion>
        </div>

    )
}