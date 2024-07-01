import Image from "next/image";
import Hero from "@/components/core/hero";
import Pricing from "@/components/core/pricing";
import Services from "@/components/core/services";

export default function Home() {
  return (
    <main className="container space-y-4">
      <Hero />
      <Services />
      <Pricing />
    </main>
  );
}
