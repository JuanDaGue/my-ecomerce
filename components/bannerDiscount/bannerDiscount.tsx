import Link from "next/link"
import { buttonVariants } from "../ui/button"

export const BannerDiscount =()=>{
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary"> Consigue hasta un -25% </h2>
            <h3 className="mt-3 font-semibold "> 20% al gastar 100$ o 25% al gastar 150% usa el codigo de TARREDEV</h3>
            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="/shop" className={buttonVariants()}>Comprar</Link>
                <Link href="/about" className={buttonVariants({variant:'outline'})}>Mas imformación</Link>

            </div>
        </div>
    )
}

