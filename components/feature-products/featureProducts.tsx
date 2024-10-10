"use client";

import { useGetFeatureProducts } from "@/api/useGetFeatureProducts";
import { SkeletonLoader } from "../SkeletonLoader";
import { ProductType } from "@/types/products";
import { ResponseType } from "@/types/response";
import { IconButton } from "../iconButton";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";
import { useRef } from "react";
import { ButtonNextBack } from "../ui/buttonNextBack";  // Import the new component

export const FeatureProducts = () => {
    const { loading, result }: ResponseType = useGetFeatureProducts();
    const router = useRouter();

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -300, // Adjust this value to control the scroll amount
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 300, // Adjust this value to control the scroll amount
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="max-w-6xl py-8 mx-auto sm:py-16 sm:px-24 relative">
            <h3 className="px-6 text-3xl font-bold text-gray-800 sm:pb-8">Featured Products</h3>
            {loading ? (
                <SkeletonLoader count={3} />
            ) : (
                <div className="content w-full px-6">

                    <ButtonNextBack onScrollLeft={scrollLeft} onScrollRight={scrollRight} />
                    
                    <div className="relative">
                        {/* Render the ButtonNextBack component */}

                        {/* Scrollable Products Container */}
                        <div
                            ref={scrollRef}
                            className="flex space-x-6 overflow-x-hidden no-scrollbar"
                        >
                            {result && result.map((product: ProductType) => {
                                const { id, productName, price, images, slug } = product;
                                return (
                                    <div 
                                        key={id} 
                                        className="flex-none w-80 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                    >
                                        <div className="relative overflow-hidden rounded-t-lg">
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0]?.formats?.small?.url}` || `${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0]?.url}`}
                                                alt={productName}
                                                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                                            />
                                            {/* Hover Action Buttons */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                                                <div className="flex space-x-4">
                                                    <IconButton
                                                        onClick={() => router.push(`product/${slug}`)}
                                                        icon={<Expand size={20} />}
                                                        className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
                                                    />
                                                    <IconButton
                                                        onClick={() => router.push(`product/${slug}`)}
                                                        icon={<ShoppingCart size={20} />}
                                                        className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Details */}
                                        <div className="p-4 text-center">
                                            <h4 className="text-xl font-semibold text-gray-900">{productName}</h4>
                                            <p className="text-gray-600 mt-2 text-sm">Price: <span className="text-lg font-bold text-gray-800">${price}</span></p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    );
};