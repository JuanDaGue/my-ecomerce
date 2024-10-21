"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PagePending = () => {
    const router = useRouter();
    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
        <div className="flex flex-col-reverse gap-2 sm:flex-row">
            <div className="flex justify-center sm:min-w-[400px]">
            <Image
                src="/AsimplelogoMini.svg" // Update the image source
                alt="Payment Pending"
                width={350}
                height={500}
                className="rounded-lg"
            />
            </div>

            <div>
            <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-yellow-600">¡Tu pago está en proceso!</h1>
                <p className="mt-4">Querido cliente,</p>
                <p className="mt-2">
                Tu pago está siendo procesado. Te enviaremos una confirmación tan
                pronto como se complete. Te agradecemos tu paciencia.
                </p>
                <p className="mt-4">
                Mientras tanto, puedes revisar tu correo para obtener más
                detalles o volver a la tienda para seguir explorando nuestro
                catálogo de arte sagrado.
                </p>
                <p className="mt-4">¡Gracias por tu confianza!</p>
                <p className="mt-2">
                <em>El equipo de JULIDAYE ✨🙏📿</em>
                </p>
                <div className="mt-6 text-center text-gray-500">
                <p className="my-3">Te notificaremos pronto. 😊</p>
                </div>
                <div className="flex justify-center sm:my-12">
                <Button onClick={() => router.push("/")}> Volver a la tienda</Button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default PagePending;
