import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: "Contact Us | Aurelian Noir",
  description: "Get in touch with Aurelian Noir. Make a reservation, ask a question, or find our location in the heart of the metropolis.",
};

// Client wrapper for Framer Motion would typically be used here, but we can do a simple CSS animation for the hero
// and use Framer Motion inside the components or a dedicated client wrapper if we want full page transitions.
// For this layout, we'll keep the server component clean and let ContactForm handle its own client logic.

export default function ContactPage() {
  return (
    <>
      {/* Page Header / Hero */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Us Hero Background"
            fill
            priority
          />
          <div className="absolute inset-0 bg-surface-dim/70"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface drop-shadow-2xl animate-[fadeInUp_0.8s_ease-out]">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 animate-[scaleIn_0.8s_ease-out_0.3s_both]"></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-section-gap bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Form */}
            <div className="w-full">
              <div className="mb-10">
                <span className="font-label-caps text-label-caps text-primary block mb-2 tracking-widest">REACH OUT</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Get in Touch</h2>
                <p className="font-body-md text-on-surface-variant mt-4 leading-relaxed opacity-90">
                  Whether you're planning a special event, need assistance with a reservation, or simply want to say hello, our team is here for you.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Right Column: Details & Hours */}
            <div className="w-full flex flex-col justify-center">
              <div className="bg-surface-container-high p-8 md:p-10 rounded-lg border border-outline-variant/10 shadow-xl mb-8">
                <h3 className="font-headline-md text-2xl text-primary mb-8 border-b border-outline-variant/20 pb-4">Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-label-caps text-on-surface mb-1">Location</h4>
                      <p className="font-body-md text-on-surface-variant">124 MM Alam Road<br/>Gulberg III, Lahore, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-label-caps text-on-surface mb-1">Reservations</h4>
                      <p className="font-body-md text-on-surface-variant">+92 300 1234567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-label-caps text-on-surface mb-1">Email Inquiry</h4>
                      <p className="font-body-md text-on-surface-variant">reservations@aureliannoir.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-high p-8 md:p-10 rounded-lg border border-outline-variant/10 shadow-xl">
                <h3 className="font-headline-md text-2xl text-primary mb-6 border-b border-outline-variant/20 pb-4">Opening Hours</h3>
                <ul className="space-y-3 font-body-md text-on-surface-variant">
                  <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span>Monday - Thursday</span>
                    <span>5:00 PM - 10:30 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span>Friday - Saturday</span>
                    <span>5:00 PM - 11:30 PM</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span>Sunday</span>
                    <span>4:00 PM - 10:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-surface-dim">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183948834924!2d-73.98784362402123!3d40.749174134812674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1714151234567!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: "grayscale(1) contrast(1.2) opacity(0.8)" }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Location Map"
        ></iframe>
      </section>

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
