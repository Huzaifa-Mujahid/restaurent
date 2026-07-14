import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata = {
  title: "Aurelian Noir | Fine Dining Excellence",
  description: "Experience the art of culinary perfection in an atmosphere of refined luxury.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} dark`}
    >
      <body className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/923207013160"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.5)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-[9999] flex items-center justify-center animate-bounce group"
          aria-label="Order on WhatsApp"
        >
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2 6.498 2 2.005 6.492 2 12c0 1.76.46 3.48 1.338 5.001L2 22l5.064-1.31c1.46.793 3.105 1.213 4.928 1.213C17.51 22 22 17.508 22 12c0-2.667-1.043-5.174-2.929-7.06zM12.02 20.167c-1.43 0-2.839-.384-4.058-1.105l-.291-.175-3.007.788.804-2.935-.19-.302a8.21 8.21 0 01-1.246-4.37c.001-4.524 3.684-8.203 8.21-8.203 2.192 0 4.253.855 5.802 2.404a8.136 8.136 0 012.405 5.796c-.001 4.524-3.685 8.203-8.21 8.203zm4.018-5.983c-.22-.11-1.3-.642-1.502-.715-.2-.073-.345-.11-.49.11-.146.22-.564.715-.692.862-.127.147-.256.165-.476.055-.22-.11-.93-.343-1.771-1.097-.655-.588-1.098-1.315-1.226-1.538-.128-.223-.014-.344.096-.455.096-.096.22-.256.33-.385.11-.128.147-.22.22-.367.073-.147.037-.275-.018-.385-.055-.11-.495-1.196-.678-1.638-.184-.442-.37-.37-.506-.378-.13-.006-.26-.007-.39-.007-.13 0-.34.018-.52.385-.18.367-.69.907-.69 2.213s.707 2.622.805 2.803c.098.183 1.39 2.22 3.48 2.803.486.134.865.214 1.162.275.486.1.92.07 1.266.043.387-.03 1.216-.497 1.387-.977.17-.48.17-.893.12-.979-.05-.086-.183-.14-.403-.25z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
