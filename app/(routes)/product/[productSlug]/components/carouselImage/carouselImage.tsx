import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselProps{
    images:{
        id: number;
        attributes:{
            url:string
        }[]
    }
}
export const ImageDetails =(props:CarouselProps) => {
    const {images}= props
    return(
        <div className="sm:px-16">

        <Carousel>
            <CarouselContent>

            {images.map((image) => (
                <CarouselItem  key={image.id} >
                                    <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                    alt="Image Product"
                                    className="rounded-lg "
                                    />
                            </CarouselItem>
                                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>

        </Carousel>
        </div>
    )
}