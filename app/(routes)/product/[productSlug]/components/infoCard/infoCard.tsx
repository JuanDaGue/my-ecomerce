import { PriceFormatter } from "@/components/ui/ScrollButtons/PriceFormatter";
import { useCart } from "@/hooks/use-cart";
import { useFavorites } from "@/hooks/use-favorite";
import { ProductType } from "@/types/products";
import { Heart } from "lucide-react";

interface InfoProps {
    product: ProductType;
}

export function InfoCard({ product }: InfoProps) {
    const { addItem } = useCart();
    const { addLoveItem, items, removeLoveItem } = useFavorites();

    // Check if the product is in favorites
    const isFavorite = items.some((favItem: ProductType) => favItem.id === product.id);

    // Handle favorite toggle
    const handleToggleFavorite = () => {
        if (isFavorite) {
            removeLoveItem(product.id);
        } else {
            addLoveItem(product);
        }
    };

    return (
        <div className="px-6 py-6 sm:py-32 relative w-full h-full">
            {/* Favorite Heart Icon */}
            <button
                className="absolute top-0 text-black hover:text-red-500 transition-colors duration-300"
                aria-label="Add to favorites"
                onClick={handleToggleFavorite}
            >
                <Heart
                    width={30}
                    strokeWidth={1}
                    className={`h-6 w-6 transition-all duration-300 ${isFavorite ? 'fill-black dark:fill-white' : 'fill-none hover:fill-black'}`}
                />
            </button>
            {/* Category Tag */}
            <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs px-3 py-1 rounded-bl-lg flex items-center space-x-2">
                <span>{product.category.categoryName}</span>
            </div>
            {/* Product Information */}
            <h3 className="text-2xl font-bold text-gray-900">{product.productName}</h3>
            <p className="text-gray-500 mt-2">{product.description}</p>
            <div className="mt-4 text-gray-500">
                <p>Dimensiones: {product.width} x {product.heigth} cm</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <p><PriceFormatter value={product.price} /></p>
                <span className="text-xs text-gray-400">
                    Publicado el: {new Date(product.publishedAt).toLocaleDateString()}
                </span>
            </div>
            {/* CTA Button */}
            <div className="mt-4">
                <button
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300"
                    onClick={() => addItem(product)}
                >
                    Comprar Ahora
                </button>
            </div>
        </div>
    );
}
