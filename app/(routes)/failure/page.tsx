"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageFailure = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <div className="flex justify-center sm:min-w-[400px]">
          <Image
            src="/failure-image.png" // Update the image source
            alt="Payment Failed"
            width={350}
            height={500}
            className="rounded-lg"
          />
        </div>

        <div>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-red-600">¡Lo sentimos, tu pago ha fallado!</h1>
            <p className="mt-4">Querido cliente,</p>
            <p className="mt-2">
              Lamentablemente, hubo un error en la transacción y no pudimos
              procesar tu compra. Te pedimos disculpas por las molestias y
              te invitamos a intentarlo nuevamente.
            </p>
            <p className="mt-4">
              Si el problema persiste, por favor no dudes en
              <strong> contactarnos</strong> para ayudarte a solucionar la
              situación.
            </p>
            <p className="mt-4">Gracias por tu paciencia,</p>
            <p className="mt-2">
              <em>El equipo de JULIDAYE ✨🙏📿</em>
            </p>
            <div className="mt-6 text-center text-gray-500">
              <p className="my-3">Esperamos verte pronto de nuevo. 😊</p>
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

export default PageFailure;
