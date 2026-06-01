import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, ChevronRight, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'WISA Project', id: 'wisa' },
    { label: 'Subjects', id: 'subjects' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-academy-green-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            id="navbar-logo"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleItemClick('home')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-academy-green-600 to-academy-yellow-500 flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform">
              <GraduationCap id="logo-icon" className="w-6 h-6" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-academy-green-800 to-academy-green-600 bg-clip-text text-transparent">
                Wise Academy
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-academy-yellow-600 font-bold -mt-1 font-mono">
                Excellence in Education
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-academy-green-700 bg-academy-green-50'
                    : 'text-slate-600 hover:text-academy-green-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call to Action Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              id="desktop-cta-whatsapp"
              onClick={() => window.open('https://wa.me/263775939333?text=Hi%20Wise%20Academy,%20I%20am%20interested%20in%20enrolling.', '_blank')}
              className="p-2.5 text-academy-green-700 bg-academy-green-100 hover:bg-academy-green-200 rounded-xl transition-all shadow-sm flex items-center justify-center cursor-pointer"
              title="Chat with Mr Moyo on WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              id="desktop-cta-enroll"
              onClick={() => handleItemClick('contact')}
              className="px-5 py-2.5 bg-gradient-to-r from-academy-green-600 to-academy-green-700 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg hover:from-academy-green-700 hover:to-academy-green-800 transition-all flex items-center space-x-1 group cursor-pointer"
            >
              <span>Enroll Now</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              id="mobile-whatsapp"
              onClick={() => window.open('https://wa.me/263775939333?text=Hi%20Wise%20Academy,%20I%20am%20interested%20in%20enrolling.', '_blank')}
              className="p-2 text-academy-green-600 bg-academy-green-100/80 rounded-lg hover:bg-academy-green-100"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-academy-green-700 hover:bg-slate-100/80 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    activeSection === item.id
                      ? 'bg-academy-green-500 text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-academy-green-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
                <button
                  id="mobile-enroll-button"
                  onClick={() => handleItemClick('contact')}
                  className="w-full py-3 bg-gradient-to-r from-academy-green-600 to-academy-green-700 text-white rounded-xl text-center font-bold shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Enroll Now</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  id="mobile-whatsapp-call-link"
                  href="https://wa.me/263775939333?text=Hi%20Wise%20Academy,%20I%20am%20interested%20in%20enrolling."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-white border border-academy-green-200 text-academy-green-700 rounded-xl text-center font-bold flex items-center justify-center space-x-2 hover:bg-academy-green-50"
                >
                  <MessageSquare className="w-5 h-5 text-academy-green-600" />
                  <span>Message Office (+263 775 939 333)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
