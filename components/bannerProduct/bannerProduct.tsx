import Link from "next/link";
import { buttonVariants } from "../ui/button";

export const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p>Sumérgete en una experiencia única</p>
                <h4 className="mt-2 text-5xl font-extrabold uppercase">
                    Artesanías y manualidades enfocadas en el espíritu
                </h4>
                <p>Despierta tus sentidos</p>
                {/* Correct Link with <a> tag */}
                <Link href="/shop" legacyBehavior>
                    <a className={buttonVariants()}>Comprar</a>
                </Link>
            </div>
            
            {/* Fixed background image with correct Tailwind syntax */}
            <div className="h-[300px] bg-cover lg:h-[600px] bg-[url('/top-view-paint-can.jpg')] bg-center mt-5"
            style={{
                opacity: 1.5, // Increases opacity
                filter: "sepia(70%) hue-rotate(-180deg)", // Adds warm color tone
            }} >
            </div>
        </>
    );
};
