"use client";
import { ProductType } from "@/types/products";  
import { useGetAllProducts } from "@/api/getAllProducts";
import { SkeletonLoader } from "@/components/SkeletonLoader";
import { ResponseType } from "@/types/response";
import { useFavorites } from "@/hooks/use-favorite";
import { Separator } from "@/components/ui/separator";
import { FiltersCategory } from "../categories/components/filtersCategory";
import { CategoryProduct } from "@/types/categoryProducts";
import { PriceFormatter } from "@/components/ui/ScrollButtons/PriceFormatter";
import { Heart } from "lucide-react";
import { ProductActionButtons } from "@/components/ui/ProductActionButtons";

export default function Page() {

    const { result, loading }: ResponseType = useGetAllProducts();

    const { addLoveItem, items, removeLoveItem } = useFavorites();

    // Handle favorite toggle
    const handleToggleFavorite = (product: ProductType) => {
        const isFavorite = items.some((favItem: ProductType) => favItem.id === product.id);
        if (isFavorite) {
            removeLoveItem(product.id);
        } else {
            addLoveItem(product);
        }
    };

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 ">
            {result != null && <h1 className="text-3xl font-medium">Disfruta todos nuestros productos </h1>}
            <Separator>
                <div>
                    <FiltersCategory />
                </div>
            </Separator>
            <div 
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}
            >
                {loading ? (
                    <SkeletonLoader count={6} />
                ) : (
                    result.map((product: CategoryProduct) => {
                        const isFavorite = items.some((favItem: ProductType) => favItem.id === product.id); // Calculate favorite state per product

                        return (
                            <div
                                key={product.id}
                                style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}
                                className="relative overflow-hidden rounded-t-lg bg-white/40  dark:bg-black/40"
                            >
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                                    alt={product.productName}
                                    style={{ width: "100%" }}
                                />
                                <ProductActionButtons product={product} />
                                <h3>{product.productName}</h3>
                                <p><PriceFormatter value={product.price} /></p>

                                <button
                                    className="absolute top-0 text-black hover:text-red-500 transition-colors duration-300"
                                    aria-label="Add to favorites"
                                    onClick={() => handleToggleFavorite(product)} // Corrected here
                                >
                                    <Heart
                                        width={30}
                                        strokeWidth={1}
                                        className={`h-6 w-6 transition-all duration-300 ${
                                            isFavorite ? "fill-black dark:fill-white" : "fill-none hover:fill-black"
                                        }`}
                                    />
                                </button>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
