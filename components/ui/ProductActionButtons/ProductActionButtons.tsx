import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { IconButton } from "../../iconButton";

interface ProductActionButtonsProps {
    slug: string;
}

export const ProductActionButtons = ({ slug }: ProductActionButtonsProps) => {
    const router = useRouter();

    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <div className="flex space-x-4">
                <IconButton
                    onClick={() => router.push(`product/${slug}`)}
                    icon={<Expand size={20} />}
                    className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
                />
                <IconButton
                    onClick={() => router.push(`#`)}
                    icon={<ShoppingCart size={20} />}
                    className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
                />
            </div>
        </div>
    );
};
