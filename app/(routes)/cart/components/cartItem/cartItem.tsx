import { useCart } from "@/hooks/use-cart"
import { ProductType } from "@/types/products"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { ProductImgMini } from "@/components/shared/productImgMini"
import { PriceFormatter } from "@/components/ui/ScrollButtons/PriceFormatter"

interface CartItemProps {
    product: ProductType
}
export const CartItem = (props:CartItemProps) => {
    const {product} =props
    const {removeItem} = useCart()
    return(
        <li className="flex py-6 border-b rounded cursor-pointer bg-white/40  dark:bg-black/80">
            <ProductImgMini slug={product.slug} url= {product.images[0]?.url}  productName={product.productName}/>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-ld font-bold ">{product.productName}</h2>
                    <p><PriceFormatter value={product.price} /></p>
                    <div className="flex items-center justify-between gap-3">
                        <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{product.taste
                        }</p>
                        <p className="px-2 py-1 text-whie bg-yellow-900 rounded-full w-fit">{product.category.categoryName}</p>
                    </div>
                    </div>

                    <div>
                        <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition  dark:bg-black/80")}>
                        <X size={20} onClick={()=> removeItem(product.id)}/>
                        </button>
                    </div>
            </div>
        </li>
    )
}
