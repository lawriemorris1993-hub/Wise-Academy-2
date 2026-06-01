import { GraduationCap, ArrowRight, BookOpen, Star, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onEnrollClick: () => void;
  onExploreSubjects: () => void;
}

export default function Hero({ onEnrollClick, onExploreSubjects }: HeroProps) {
  // Use the exact path returned by the generate_image tool.
  const heroImageSrc = "/src/assets/images/wise_academy_hero_1780320310627.png";

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-education-grid bg-radial-gradient overflow-hidden border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div id="hero-left-container" className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            {/* National Academic Excellence Badge */}
            <div className="inline-flex items-center space-x-2 bg-academy-green-100/70 border border-academy-green-200 px-3.5 py-1.5 rounded-full text-academy-green-800 text-xs sm:text-sm font-bold w-fit mx-auto lg:mx-0 shadow-xs">
              <Award className="w-4.5 h-4.5 text-academy-yellow-600 fill-academy-yellow-400" />
              <span className="font-heading tracking-wide">Bulawayo's Premier Learning Hub</span>
            </div>

            {/* Hero Main Heading */}
            <h1
              id="hero-title"
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight"
            >
              Wise Academy – <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-academy-green-700 to-emerald-600 bg-clip-text text-transparent">
                Excellence in Education
              </span>
            </h1>

            {/* Core Subtitle as described in requirements */}
            <p
              id="hero-subtitle"
              className="font-heading font-semibold text-lg sm:text-xl text-academy-yellow-600 bg-academy-yellow-50 border border-academy-yellow-200/50 rounded-xl px-4 py-2.5 w-fit mx-auto lg:mx-0 shadow-xs"
            >
              ✨ ZIMSEC O & A Level Tuition Centre
            </p>

            <p id="hero-description" className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              At Wise Academy, we empower high school scholars and independent candidates in Zimbabwe to excel in their academic careers. Through rigorous mentorship, practical combined science tutoring, and dedicated revision sessions, your success is guaranteed.
            </p>

            {/* Call to Actions */}
            <div id="hero-cta-buttons" className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-enroll-now"
                onClick={onEnrollClick}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-academy-yellow-500 to-academy-yellow-600 hover:from-academy-yellow-600 hover:to-academy-yellow-700 text-slate-950 font-bold rounded-2xl shadow-lg shadow-academy-yellow-500/15 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                id="hero-view-subjects"
                onClick={onExploreSubjects}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 font-bold rounded-2xl transition-all shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-academy-green-600" />
                <span>Explore Subjects</span>
              </button>
            </div>

            {/* Fast Stats Features */}
            <div id="hero-features-bar" className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100">
              <div id="feat-custom-pass" className="flex flex-col items-center lg:items-start">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-academy-green-700">95%+</span>
                <span className="text-xs text-slate-500 font-medium text-center lg:text-left">ZIMSEC Pass Rate</span>
              </div>
              <div id="feat-custom-tutors" className="flex flex-col items-center lg:items-start border-x border-slate-100 px-3">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-academy-green-700">12+</span>
                <span className="text-xs text-slate-500 font-medium text-center lg:text-left">Expert Tutors</span>
              </div>
              <div id="feat-custom-time" className="flex flex-col items-center lg:items-start">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-academy-green-700">Day & Night</span>
                <span className="text-xs text-slate-500 font-medium text-center lg:text-left">Flexible Study Modes</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visuals featuring the premium AI generated classroom illustration */}
          <div id="hero-right-container" className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Soft glow background shapes matching our green & yellow theme */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-academy-yellow-200/50 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -right-12 w-60 h-60 bg-academy-green-200/40 rounded-full blur-3xl -z-10" />

              {/* Main Illustration Framework */}
              <div className="relative p-3 bg-white/70 backdrop-blur-xs rounded-3xl shadow-2xl border border-white/50 overflow-hidden group">
                <img
                  id="hero-illustration-img"
                  src={heroImageSrc}
                  alt="Wise Academy dynamic core O and A level classroom study team"
                  className="rounded-2xl w-full object-cover shadow-sm transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Floating Credential card */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-slate-800 shadow-xl flex items-center space-x-3 text-white">
                  <div className="p-2 bg-academy-green-500 rounded-lg text-white">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm tracking-wide text-white">Fully Accredited Centre</h4>
                    <p className="text-[11px] text-slate-300 font-mono">Expert ZIMSEC syllabus tuition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
