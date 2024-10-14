import { useRouter } from "next/navigation"

interface ProductImageMiniature {
    slug: string
    url:string
    productName:string
}
export const ProductImgMini = (props: ProductImageMiniature) => {
    const router =useRouter();
    const {slug, url, productName} = props;
    return(
        <div className="w-24 px-4 "
        onClick={()=> router.push(`/product/${slug}`)}
        >
            <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
                alt={productName}
                className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
            />       
        </div>
    )
}