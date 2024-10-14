import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { IconButton } from "../../iconButton";
import { ProductType } from "@/types/products";
import { useCart } from "@/hooks/use-cart";

interface ProductActionButtonsProps {
    product: ProductType; 
}

export const ProductActionButtons = ({ product }: ProductActionButtonsProps) => {
    const router = useRouter();
    const {addItem}= useCart()
    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <div className="flex space-x-4">
                <IconButton
                    onClick={() => router.push(`/product/${product.slug}`)}
                    icon={<Expand size={20} />}
                    className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
                />
                <IconButton
                    onClick={() => addItem(product)}
                    icon={<ShoppingCart size={20} />}
                    className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
                />
            </div>
        </div>
    );
};
