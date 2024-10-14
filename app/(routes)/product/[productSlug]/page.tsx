"use client";
import { ProductType } from "@/types/products";  
import { useGetDateails } from "@/api/getDetailsProduct";
import { useParams } from "next/navigation";
import { SkeletonLoader } from "@/components/SkeletonLoader";
import { ResponseType } from "@/types/response";
import { useRef } from "react";
import { ImageDetails } from "./components/carouselImage";
import { InfoCard } from "./components/infoCard"; // Import the Info component

export default function Page() {
    const params = useParams();
    const { productSlug } = params;
    const { result, loading }: ResponseType = useGetDateails(productSlug);
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols- md:grid-cols-1 gap-6 mx-4 py-8 ">
                {loading ? (
                    <SkeletonLoader count={2} />
                ) : (
                    result &&
                    result.map((product: ProductType) => (
                            <div
                            key={product.id}
                            className="bg-white/40 shadow-xl rounded-lg overflow-hidden border border-gray-200 max-w-6xl py-4 m-0 sm:px-24"
                        >
                    
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <ImageDetails images={product.images}/>
                                <InfoCard product={product} /> 
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
