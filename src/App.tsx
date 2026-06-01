/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, BellRing, TicketCheck, Users, GraduationCap, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Sub-components imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WisaProject from './components/WisaProject';
import Subjects from './components/Subjects';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface FaqItem {
  question: string;
  answer: string;
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [prefilledMessage, setPrefilledMessage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Administrative Announcements banner toggle
  const [showBanner, setShowBanner] = useState(true);

  // Intersection Observer to update active navigation tab based on viewport scroll
  useEffect(() => {
    const sections = ['home', 'about', 'wisa', 'subjects', 'pricing', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // Offset for sticky header
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler targeting individual element container IDs
  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offsetTop = el.offsetTop - 80; // Offset for header navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Prefill contact message with specific plan query & auto-scroll
  const handleSelectPricingPlan = (prefilledText: string) => {
    setPrefilledMessage(prefilledText);
    setTimeout(() => {
      handleNavigateToSection('contact');
    }, 100);
  };

  // Prefill contact message with WISA Initiative query & auto-scroll
  const handleApplyForWisa = (wisaText: string) => {
    setPrefilledMessage(wisaText);
    setTimeout(() => {
      handleNavigateToSection('contact');
    }, 100);
  };

  // FAQs targeted specifically to Zimbabwean O & A level families
  const faqs: FaqItem[] = [
    {
      question: "Is Wise Academy fully accredited to register ZIMSEC exam candidates?",
      answer: "Yes. Wise Academy coordinates fully with standard registered national codes. We provide formal registrations for both November series and supplementary examinations, guiding students through state candidate paperwork."
    },
    {
      question: "What qualifications do Wise Academy tutors hold?",
      answer: "Every single classroom mentor is a highly veteran educational expert holding national certification from local universities and years of practical classrooms teaching experience. Many act as official script markers under national boards."
    },
    {
      question: "Do you offer practical science experiments demonstrations?",
      answer: "Absolutely. We conduct real practical demonstrations in chemistry, biological observations, and physical mechanics logic explicitly structured to satisfy Combined Science and single sciences curricula requirements."
    },
    {
      question: "Are installment plans available for day-school options?",
      answer: "Yes, we encourage affordable learning structures. Families can easily arrange installment plans where termly schooling balances of $75 can be paid across three equal portions over the teaching term after consulting Mr Moyo."
    },
    {
      question: "Can working candidates enroll in Night School sessions?",
      answer: "Certainly. Our Night School was custom-designed for mature students, full-time workers, or candidates looking to retake O/A Level papers. Classes are conducted smoothly from 5:00 PM to 8:00 PM to protect standard workspace shifts."
    },
    {
      question: "Where is Wise Academy situated precisely?",
      answer: "We are situated in the downtown center of Bulawayo, at the intersection of 5th Avenue and Jason Moyo Avenue. Our building is highly visible, secure, and surrounded by fast municipal transport networks."
    }
  ];

  const handleFaqToggle = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div id="wise-academy-root" className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-academy-green-100 selection:text-academy-green-750">
      
      {/* Top Admissions & Registration Advisory Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            id="admissions-flag-banner"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-academy-green-750 via-academy-green-600 to-academy-yellow-600 text-white font-medium py-2.5 px-4 text-xs shadow-md border-b border-academy-green-150/20"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-2 mx-auto lg:mx-0">
                <BellRing className="w-4 h-4 animate-swing text-academy-yellow-300" />
                <span className="font-heading font-semibold text-center tracking-wide">
                  📅 ZIMSEC Second-Semester Tuition & Independent Candidate Registration Now Open. Visit Cnr 5th Ave and Jason Moyo office today!
                </span>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="hidden lg:block text-white/80 hover:text-white p-1 text-xs hover:bg-white/10 rounded-lg cursor-pointer"
                aria-label="Dismiss admissions banner"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`flex-grow ${showBanner ? 'pt-7' : ''} transition-all duration-300`}>
        {/* Navigation Layer */}
        <Navbar onNavigate={handleNavigateToSection} activeSection={activeSection} />

        {/* Hero Section Container */}
        <Hero
          onEnrollClick={() => handleNavigateToSection('contact')}
          onExploreSubjects={() => handleNavigateToSection('subjects')}
        />

        {/* Welcome & Story / About Sections */}
        <About />

        {/* Special Program: WISA Project Section */}
        <WisaProject onApplyForWisa={handleApplyForWisa} />

        {/* Subjects Grid & Exploration Module */}
        <Subjects />

        {/* Fees plans & Calculator Module */}
        <Pricing onPlanSelect={handleSelectPricingPlan} />

        {/* Zimbabwean FAQ Accordion */}
        <section id="faq-section" className="py-20 bg-slate-100 relative overflow-hidden border-b border-slate-205">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-bold tracking-wider text-academy-green-700 uppercase block font-mono">
                Clear Answers
              </span>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900 tracking-tight">
                Frequently Asked Admissions Questions
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Inquiries frequently posed by Zimbabwean guardians and independent scholars concerning class arrangements, syllabus coverage, and candidate registration.
              </p>
            </div>

            <div id="faq-accordions" className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = expandedFaq === index;
                return (
                  <div
                    key={index}
                    id={`faq-accordion-item-${index}`}
                    className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => handleFaqToggle(index)}
                      className="w-full text-left px-5 py-4.5 font-bold font-heading text-slate-800 hover:text-academy-green-800 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base">{faq.question}</span>
                      <span className="p-1 px-2 rounded-xl bg-slate-50 text-slate-500 border border-slate-200">
                        {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-700" /> : <ChevronDown className="w-4 h-4 text-emerald-700" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-slate-100 bg-slate-50/50"
                        >
                          <p className="px-5 py-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Support footer */}
            <div className="mt-10 p-5 rounded-2xl border border-slate-200 bg-white text-center text-xs text-slate-500">
              Still have queries about our Bulawayo lessons, fees, or curricula support? Speak with Principal Mr Moyo directly on phone call via <a href="tel:+263775939333" className="text-academy-green-700 font-bold hover:underline">+263 775 939 333</a> or write to admissions desks.
            </div>

          </div>
        </section>

        {/* Admissions Form & Contact coordinates */}
        <Contact initialPrefilledMessage={prefilledMessage} />
      </div>

      {/* Main Footer Block */}
      <Footer onNavigate={handleNavigateToSection} />

    </div>
  );
}
