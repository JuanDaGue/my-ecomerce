"use client"
import { useRouter } from "next/navigation"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import { Card, CardContent } from "../ui/card"
import Autoplay from "embla-carousel-autoplay"

export const dataCarrouselTpo= [
    {
        id:1,
        title: "Envio en 24 horas",
        description: "Cliente VIP para el E-commerce, obtén más información",
        link: "#!",
    },
    {
        id:2,
        title: "Envio en 24 horas",
        description: "Cliente VIP para el E-commerce, obtén más información",
        link: "#!",
    },
    {
        id:3,
        title: "Envio en 24 horas",
        description: "Cliente VIP para el E-commerce, obtén más información",
        link: "#!",
    },
    {
        id:4,
        title: "Envio en 24 horas",
        description: "Cliente VIP para el E-commerce, obtén más información",
        link: "#!",
    }
]

export const CarruselBanner = () => {
    const router = useRouter()
    return (
        <div className="bg-gray-200 dark:bg-black/80 my-5">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[Autoplay({
                    delay:2500
                })]}
            >
                <CarouselContent>

                
                    {dataCarrouselTpo.map(({id, title, link, description}) => (
                        <CarouselItem 
                            key={id} 
                            onClick={() => router.push(link)} 
                            className="bg-silver p-4 m-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-300 transition duration-300"
                        >
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
                                        <p className="text-gray-700 dark:text-gray-300">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
