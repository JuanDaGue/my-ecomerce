import { useCart } from "@/hooks/use-cart"
import { ProductType } from "@/types/products"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface CartItemProps {
    product: ProductType
}
export const CartItem = (props:CartItemProps) => {
    const {product} =props
    const router = useRouter();
    const {removeItem} = useCart()
    return(
        <li className="flex py-6 border-b rounded cursor-pointer">
            <div className=" bg-gray-50"
            onClick={()=> router.push(`/product/${product.slug}`)}
            >
            <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0]?.formats?.small?.url}` || `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0]?.url}`}
                alt={product.productName}
                className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
            />       
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-ld font-bold ">{product.productName}</h2>
                    <p className="font-bold">{product.price}</p>
                    <div className="flex items-center justify-between gap-3">
                        <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{product.taste
                        }</p>
                        <p className="px-2 py-1 text-whie bg-yellow-900 rounded-full w-fit">{product.category.categoryName}</p>
                    </div>
                    </div>

                    <div>
                        <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={()=> removeItem(product.id)}/>
                        </button>
                    </div>
            </div>
        </li>
    )
}
