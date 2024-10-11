// components/Info.tsx
import { ProductType } from "@/types/products";

interface InfoProps {
    product: ProductType;
}

export function InfoCard({ product }: InfoProps) {
    return (
        <div className=" px-6 py-6 sm:py-32 relative w-full h-full">
        {/* Category Tag */}
        <span className="absolute top-0 right-0 bg-gray-800 text-white text-xs px-3 py-1 rounded-bl-lg ">
            {product.category.categoryName}
        </span>

        {/* Product Information */}
        <h3 className="text-2xl font-bold text-gray-900">{product.productName}</h3>
        <p className="text-gray-500 mt-2 ">{product.description}</p>

        <div className="flex justify-between items-center mt-4  ">
            <span className="text-lg font-semibold text-gray-900">${product.price}</span>
            <span className="text-xs text-gray-400">
            Publicado el: {new Date(product.publishedAt).toLocaleDateString()}
            </span>
        </div>

        {/* CTA Button */}
        <div className="mt-4">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300">
            Comprar Ahora
            </button>
        </div>
        </div>
    );
}
