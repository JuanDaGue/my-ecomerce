import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselProps {
  images: {
    id: number;
    url: string;
  }[];
}

export const ImageDetails = (props: CarouselProps) => {
  const { images } = props;

  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              {/* Center the image inside a flex container */}
              <div className="flex justify-center items-center h-96 sm:h-[600px] overflow-hidden rounded-lg group">
                {/* Wrap the image in the Zoom component */}
                <Zoom>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                    alt="Image Product"
                    className="max-w-full max-h-full object-cover rounded-lg transform transition-transform duration-500 ease-in-out"
                  />
                </Zoom>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
