import Hero from "@/components/Hero";
import DishCard from "@/components/DishCard";
import CoreValues from "@/components/CoreValues";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  const premiumDishes = [
    {
      image: "/mutton karahi (1).jpg",
      name: "Shinwari Mutton Karahi",
      description: "Tender mutton cooked in its own fat with fresh tomatoes, green chilies, and black pepper.",
      price: "3800"
    },
    {
      image: "/kabab.jpg",
      name: "Reshmi Seekh Kebab",
      description: "Minced chicken blended with authentic spices, grilled to perfection over charcoal.",
      price: "1200"
    },
    {
      image: "/nihari.jpg",
      name: "Nalli Nihari",
      description: "Slow-cooked beef shank infused with rich bone marrow and topped with ginger and green chilies.",
      price: "2500"
    }
  ];

  return (
    <>
      <Hero />

      {/* Our Story Section */}
      <section className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/30 transition duration-500"></div>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
                alt="Interior view"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-stack-md lg:pl-12">
            <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-2">OUR HERITAGE</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">The Rabowed Kindle</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              At Aurelian Noir, we believe that dining is a multisensory journey. Founded on the principles of traditional French techniques merged with avant-garde modernism, our kitchen is a sanctuary of precision.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant/80">
              Every ingredient is sourced from local artisans who share our obsession with quality. Our heritage is not just in our recipes, but in the meticulous care we provide to every guest who enters our doors.
            </p>
            <div className="pt-4">
              <button className="border-b-2 border-primary text-primary pb-1 font-label-caps text-label-caps hover:text-secondary hover:border-secondary transition-all">LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Dishes Section */}
      <section className="py-section-gap bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-primary block mb-2">CURATED SELECTION</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Premium Dishes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {premiumDishes.map((dish, index) => (
              <DishCard key={index} {...dish} />
            ))}
          </div>
        </div>
      </section>

      <CoreValues />

      <Testimonials />
    </>
  );
}

