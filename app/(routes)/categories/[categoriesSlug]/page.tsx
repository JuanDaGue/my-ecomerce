"use client"
import { useGetCategotyProducts } from "@/api/getCategoryProduct"
import { SkeletonLoader } from "@/components/SkeletonLoader"
import { ResponseType } from "@/types/response"
import { CategoryProduct } from "@/types/categoryProducts"
import { useParams, useRouter } from "next/navigation"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { FiltersCategory } from "../components/filtersCategory"
import { ProductActionButtons } from "@/components/ui/ProductActionButtons"

export default  function page (){
    const params = useParams();
    const {categoriesSlug }= params
    const { result, loading }:ResponseType = useGetCategotyProducts(categoriesSlug)
    const router = useRouter()
    return(
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result!= null && (<h1 className="text-3xl font-medium">Increilbes {result[0]?.category.categoryName}</h1>)}
            <Separator>
                <div>
                    <FiltersCategory></FiltersCategory>
                </div>
            </Separator>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {loading ? (
                <SkeletonLoader count={3} />
            ) : ( result.map((product:CategoryProduct) => (             
                <div key={product.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }} className="relative overflow-hidden rounded-t-lg">
                    
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`} alt={product.productName} style={{ width: '100%' }} />
                            <ProductActionButtons slug={product.slug} />
                            <h3>{product.productName}</h3>
                            {/* <p>{product.description}</p> */}
                            <p><strong>Price:</strong> {product.price}</p>
                        </div>
                        ))
            )}
        </div>
    </div>   
    )
}