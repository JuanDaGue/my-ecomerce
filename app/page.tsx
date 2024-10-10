
import { FeatureProducts } from "@/components/feature-products";
import { CarruselBanner } from "@/components/carruselBanner";
import { BannerDiscount } from "@/components/bannerDiscount";
import { ChooseCategory } from "@/components/chooseCategory";
import { BannerProduct } from "@/components/bannerProduct";

export default function Home() {
  return (
<main>
  <div>
      <CarruselBanner/>
      <FeatureProducts/>
      <BannerDiscount/>
      <ChooseCategory/>
      <BannerProduct/>
    </div>
</main>
  );
}
