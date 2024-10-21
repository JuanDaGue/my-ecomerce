"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess =() =>{
    const router =useRouter()
    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center sm:min-w-[400px]">
                    <Image src="/alogo.png" alt ="Success" width={350} height={500} className="rounded-lg "/>

                </div>

                <div>
                    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
                        <h1 className="text-2xl font-bold text-green-600">¡Gracias por tu compra!</h1>
                        <p className="mt-4">Querido cliente,</p>
                        <p className="mt-2">
                        ¡Gracias por tu compra en <strong>JULIDAYE</strong>! Apreciamos
                        profundamente tu elección de confiar en nuestro arte católico. Cada
                        pieza es creada con devoción y dedicación, reflejando la belleza y la
                        fe que nos unen. Esperamos que este producto llene tu hogar de paz y
                        espiritualidad.
                        </p>
                        <p className="mt-4">Que Dios te bendiga siempre,</p>
                        <p className="mt-2">
                        <em>El equipo de JULIDAYE ✨🙏📿</em>
                        </p>
                        <div className="mt-6 text-center text-gray-500">
                            <p className="my-3">¡Disfruta tu arte sagrado! 😊</p>
                        </div>
                        <div className="flex justify-center sm:my-12">
                        <Button onClick={()=> router.push('/')}> Volver a la tienda</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PageSuccess;