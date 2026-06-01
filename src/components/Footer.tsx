import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Compass, ArrowUp, Send, Heart, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", label: "YouTube" }
  ];

  const quickLinks = [
    { label: "Home Base", id: "home" },
    { label: "Our Story (About)", id: "about" },
    { label: "WISA Project Initiative", id: "wisa" },
    { label: "O & A Level Subjects", id: "subjects" },
    { label: "Clear Pricing Plans", id: "pricing" },
    { label: "Registrar Contact", id: "contact" }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 border-t border-slate-950 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative accent colors */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-academy-green-600 via-academy-yellow-400 to-academy-green-700" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand/Slogan Column */}
          <div id="footer-logo-column" className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={handleScrollToTop}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-academy-green-600 to-academy-yellow-500 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                Wise Academy
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing standard registered ZIMSEC Ordinary & Advanced level coaching and customized extra lessons support in Bulawayo, Zimbabwe.
            </p>

            <div className="text-xs text-academy-yellow-405 font-medium flex items-center space-x-1 font-heading">
              <span>National Motto Alignment:</span>
              <span className="text-slate-400 font-sans italic">"Unity, Freedom, Work"</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div id="footer-links-column" className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-nav-${link.id}`}
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-400 hover:text-academy-yellow-400 transition-colors cursor-pointer text-left focus:outline-hidden"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact coordinates reminder Column */}
          <div id="footer-admissions-column" className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white font-mono">
              Admissions Office
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-academy-green-500 shrink-0 mt-0.5" />
                <span>Cnr 5th Ave and Jason Moyo Ave, Bulawayo, Zimbabwe</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4.5 h-4.5 text-academy-green-500 shrink-0" />
                <a href="tel:+263775939333" className="hover:text-white transition-colors">
                  Mr Moyo: +263 775 939 333
                </a>
              </li>
            </ul>
          </div>

          {/* Sincere newsletter placeholder Column */}
          <div id="footer-newsletter-column" className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white font-mono">
              Office Hours
            </h4>
            <div className="space-y-2 text-xs text-slate-400 font-mono">
              <p><span className="font-bold text-white uppercase font-sans">Mon - Fri:</span> 08:00 - 17:00</p>
              <p><span className="font-bold text-white uppercase font-sans">Saturdays:</span> 08:00 - 13:00</p>
              <p><span className="font-bold text-white uppercase font-sans">Night Classes:</span> 17:00 - 20:00</p>
              <p className="text-academy-yellow-400 font-sans italic">Admin office closes public holidays.</p>
            </div>
          </div>

        </div>

        {/* Lower row with legal copyright and social media icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          <div id="footer-copyright-note" className="text-center sm:text-left space-y-1">
            <p>&copy; {new Date().getFullYear()} Wise Academy. All rights reserved.</p>
            <p className="text-[10px] tracking-wide text-slate-655 font-mono">
              Registration Code available at Bulawayo administrative desks. Powered by Google.
            </p>
          </div>

          {/* Social media Handles */}
          <div id="footer-social-handles" className="flex items-center space-x-3">
            {socialLinks.map((soc, index) => (
              <a
                key={index}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Wise Academy social ${soc.label}`}
                className="w-8.5 h-8.5 rounded-lg bg-slate-800 text-slate-400 hover:bg-academy-yellow-420 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer"
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Back up key button */}
          <button
            onClick={handleScrollToTop}
            className="p-2 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-all flex items-center space-x-1 cursor-pointer"
            title="Scroll to Top of Academy"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
