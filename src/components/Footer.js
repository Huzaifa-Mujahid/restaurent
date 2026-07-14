import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full pt-section-gap pb-8 bg-surface-container-lowest dark:bg-surface-container-lowest">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="font-headline-md text-headline-md text-primary mb-6">Aurelian Noir</div>
          <p className="text-on-surface-variant text-body-md">
            Redefining the essence of fine dining through passion, precision, and the luxury of time.
          </p>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-6">RESERVATIONS</h4>
          <p className="text-on-surface-variant text-body-md mb-2">Mon - Sun: 5pm - 11pm</p>
          <p className="text-on-surface-variant text-body-md">reservations@aureliannoir.com</p>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-6">LOCATION</h4>
          <p className="text-on-surface-variant text-body-md mb-2">124 MM Alam Road</p>
          <p className="text-on-surface-variant text-body-md">Gulberg III, Lahore, Pakistan</p>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-6">STAY CONNECTED</h4>
          <div className="flex space-x-4">
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">
              Ig
            </a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">
              Fb
            </a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">
              Tw
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center text-on-surface-variant font-label-caps text-label-caps">
        <div className="mb-4 md:mb-0">© {new Date().getFullYear()} Aurelian Noir. All rights reserved.</div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link className="hover:text-secondary transition-colors" href="#">Privacy Policy</Link>
          <Link className="hover:text-secondary transition-colors" href="#">Terms of Service</Link>
          <Link className="hover:text-secondary transition-colors" href="#">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
