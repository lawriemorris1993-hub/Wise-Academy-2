import { Sparkles, HelpCircle, GraduationCap, Users, Calendar, ArrowUpRight, Award, Flame, Star } from 'lucide-react';

interface WisaProps {
  onApplyForWisa: (wisaMsg: string) => void;
}

export default function WisaProject({ onApplyForWisa }: WisaProps) {
  const initiatives = [
    {
      title: "Weekend Revision Masterclasses",
      tag: "Intensive Drills",
      icon: <Calendar className="w-5 h-5 text-academy-yellow-700" />,
      desc: "Hosted every Saturday to break down difficult examination themes, ZIMSEC grading benchmarks, and quick-solving calculators formulas.",
      accent: "from-academy-yellow-50 to-academy-yellow-100/50 border-academy-yellow-250"
    },
    {
      title: "The Underprivileged Scholars Scheme",
      tag: "Community Sponsoring",
      icon: <Award className="w-5 h-5 text-academy-green-700" />,
      desc: "A special scholarship scheme providing top-performing under-resourced students in Bulawayo with free tuition packs, stationery, and laboratory access.",
      accent: "from-academy-green-50 to-academy-green-100/40 border-academy-green-200"
    },
    {
      title: "Peer-to-Peer Study Clusters",
      tag: "Collaborative Study",
      icon: <Users className="w-5 h-5 text-amber-700" />,
      desc: "Syllabus-aligned focus groups where scholars challenge questions, conduct standard science readings, and peer-review essay outline formats.",
      accent: "from-amber-50 to-amber-100/40 border-amber-200"
    }
  ];

  return (
    <section id="wisa" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-950">
      {/* Decorative vector overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-academy-green-600/10 rounded-full blur-3xl -z-1" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-academy-yellow-500/10 rounded-full blur-3xl -z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div id="wisa-header-left" className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-academy-yellow-400 text-slate-950 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4 text-emerald-950 animate-spin-slow" />
              <span>Wise Academy Initiative</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              WISA Project (Wise Academy Initiative)
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The WISA Project is our flagship academic support programme under the direction of Wise Academy. It was designed to bridge the opportunity gap for Zimbabwean high schoolers, offering targeted remediation, mentorship, and extensive examination coaching to unlock students' true cognitive potentials.
            </p>
          </div>

          {/* Call to action badge right */}
          <div id="wisa-header-right" className="lg:col-span-5 flex lg:justify-end">
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md text-left w-full max-w-sm">
              <div className="flex items-center space-x-2 text-academy-yellow-400 font-bold text-sm mb-2">
                <Star className="w-5 h-5 fill-academy-yellow-400" />
                <span>WISA Academic Hub</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Are you a parent, educator, or independent candidate in Bulawayo looking to join our free weekend revision clusters? Let's connect you today!
              </p>
              <button
                id="wisa-apply-whatsapp"
                onClick={() => onApplyForWisa('Hi Mr Moyo, I would like to learn more about joining the WISA weekend support program at Wise Academy.')}
                className="w-full py-3 bg-academy-yellow-400 hover:bg-academy-yellow-500 text-slate-950 rounded-xl text-center font-bold text-xs tracking-wide transition-all scale-100 hover:scale-101 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Inquire About WISA Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Triple Bento Grid highlighting activities */}
        <div id="wisa-pillars-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((init, idx) => (
            <div
              key={idx}
              id={`wisa-initiative-${idx}`}
              className={`rounded-3xl p-6 border bg-gradient-to-br flex flex-col justify-between hover:scale-101 hover:-translate-y-0.5 transition-all group ${init.accent}`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    {init.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-md text-slate-850 font-mono bg-white border border-slate-200">
                    {init.tag}
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-2">
                  {init.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {init.desc}
                </p>
              </div>

              {/* Read marker */}
              <div className="mt-6 flex items-center space-x-1 text-slate-900 font-bold text-xs">
                <span>Integrated Syllabus support</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote / Narrative at the bottom of WISA */}
        <div id="wisa-quote-card" className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center sm:justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-academy-green-605/20 border border-academy-green-500/35 flex items-center justify-center text-academy-yellow-400 text-xl font-bold font-heading">
              "
            </div>
            <p className="text-xs sm:text-sm text-slate-200 italic max-w-2xl leading-relaxed">
              "WISA was founded to ensure that no child in Bulawayo fails ZIMSEC O-Levels simply because they lacked expensive revision guidebooks. Our doors remain open for targeted, quality tutorials." <br />
              <span className="not-italic font-bold text-academy-yellow-400 mt-1 block font-sans">— Mr Moyo, Wise Academy Founder & Principal</span>
            </p>
          </div>
          <button
            onClick={() => onApplyForWisa('Hi Mr Moyo, I would like to support/volunteer/enroll my child in the WISA Project.')}
            className="px-5 py-2.5 border-2 border-academy-green-500 hover:bg-academy-green-500/20 text-white rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer"
          >
            Get Involved Now
          </button>
        </div>

      </div>
    </section>
  );
}
