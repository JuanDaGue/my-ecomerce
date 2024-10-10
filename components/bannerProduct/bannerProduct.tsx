import Link from "next/link"
import { buttonVariants } from "../ui/button"

export const BannerProduct = () => {
    return(
        <>
            <div className="mt-4 text-center">
                <p>Sum'ergete en una experiencia única</p>
                <h4 className="mt-2 text-5xl font-extrabold upercase">Artesanias y manuealidades enfocadas en el espiritu</h4>
                <p>Despierta tus sentidos</p>
                <Link href="#" className={buttonVariants()}> comprar</Link>   
            </div>
            <div className="h-[900px] bg-url('/Designer.jpeg') bg-center mt-5">

            </div>
        </>
    )
}