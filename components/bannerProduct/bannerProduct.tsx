import Link from "next/link";
import { buttonVariants } from "../ui/button";

export const BannerProduct = () => {
    return (
        <>
            {/* Responsive text container */}
            <div className="mt-4 text-center px-4 md:px-8">
                <p className="text-sm md:text-base">Sumérgete en una experiencia única</p>
                
                {/* Responsive heading */}
                <h4 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase">
                    Artesanías y manualidades enfocadas en el espíritu
                </h4>

                <p className="text-sm md:text-base mt-2">Despierta tus sentidos</p>
                
                {/* Button with responsive margin */}
                <Link href="/shop" legacyBehavior>
                    {/* Use buttonVariants correctly here */}
                    <a className={buttonVariants({ variant: "default", size: "lg" })}>
                        Comprar
                    </a>
                </Link>
            </div>

            {/* Responsive background image */}
            <div 
                className="
                    h-[200px] 
                    sm:h-[300px] 
                    md:h-[400px] 
                    lg:h-[600px] 
                    bg-cover bg-center mt-5
                "
                style={{
                    backgroundImage: "url('/top-view-paint-can.jpg')",
                    opacity: 1.5, // Increases opacity
                    filter: "sepia(70%) hue-rotate(-180deg)", // Adds warm color tone
                }}
            ></div>
        </>
    );
};
