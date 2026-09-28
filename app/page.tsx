import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Offers } from "@/components/sections/offers/Offers";
import { Objects } from "@/components/sections/objects/Objects";
import { CatalogSwiper } from "@/components/sections/sliderCatalog/sliderCatalog";
import { Advantages } from "@/components/sections/advantages/Advantages";
import { CatalogGrid } from "@/components/sections/catalog/CatalogGrid";
import { Steps } from "@/components/sections/steps/Steps";
import { Reviews} from "@/components/sections/reviews/Reviews";
import { Faq } from "@/components/sections/faq/Faq"
import {Contacts} from "@/components/sections/contacts/Contacts"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Offers />
      <Objects />
      <CatalogSwiper />
      <Advantages />
      <CatalogGrid />
      <Steps />
      <Reviews />
      <Faq />
      <Contacts />
    </main>
  );
}
