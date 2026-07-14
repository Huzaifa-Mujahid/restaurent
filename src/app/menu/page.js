import Image from 'next/image';
import MenuTabs from '@/components/MenuTabs';
import { menuData } from '@/lib/menuData';

export const metadata = {
  title: "Menu | Aurelian Noir",
  description: "Explore our curated selection of premium dishes, from fresh seafood and prime cuts to exquisite desserts and signature beverages.",
};

export default function MenuPage() {
  return (
    <>
      {/* Page Header / Hero */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2070&auto=format&fit=crop"
            alt="Menu Hero Background"
            fill
            priority
          />
          <div className="absolute inset-0 bg-surface-dim/70"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface drop-shadow-2xl animate-[fadeInUp_0.8s_ease-out]">
            Our Menu
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 animate-[scaleIn_0.8s_ease-out_0.3s_both]"></div>
        </div>
      </section>

      {/* Menu Tabs Section */}
      <section className="bg-surface-container-lowest min-h-screen">
        <MenuTabs menuItems={menuData} />
      </section>

      {/* Styles for simple keyframe animations on the server component header */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </>
  );
}
