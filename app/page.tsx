import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import {Offers} from "@/components/sections/offers/Offers";
import { Objects } from "@/components/sections/objects/Objects";
import {CatalogSwiper} from "@/components/sections/sliderCatalog/sliderCatalog";
import { Advantages } from "@/components/sections/advantages/Advantages"; 

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Offers/>
      <Objects/>
      <CatalogSwiper/>
      <Advantages/>
    </main>
  );
}