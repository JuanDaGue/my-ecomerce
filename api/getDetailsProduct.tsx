import {  useEffect, useState } from "react"


export function useGetDateails(slug: string|string[]){
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/products?filters[slug][$eq]=${slug}&populate=*`
    const [result, setResult] = useState(null)
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState("")
    useEffect(()=>{
        (async ()=>{
            try {
                const resp = await fetch(url)
                const data = await resp.json();
                setResult(data.data)
                setLoading(false)

            } catch (error:any) {
                setError(error)
                setLoading(false)

            }
        })()
    },[url])
    return(
        {loading, result, error}
    )
}