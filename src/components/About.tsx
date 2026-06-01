import { Compass, BookOpen, Clock, Users, CheckCircle, MapPin, CompassIcon, GraduationCap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <GraduationCap className="w-6 h-6 text-academy-green-700" />,
      title: "Comprehensive ZIMSEC Coaching",
      desc: "Detailed modular study guides tracking previous examination papers strictly from 2018 to the most recent national series, guaranteeing academic success."
    },
    {
      icon: <Users className="w-6 h-6 text-academy-green-700" />,
      title: "Interactive Classroom Mentoring",
      desc: "Maintained small class ratios where student-driven inquiry is fostered, ensuring clear comprehension of complex calculations and literacy criteria."
    },
    {
      icon: <Clock className="w-6 h-6 text-academy-green-700" />,
      title: "Extensive Study Configurations",
      desc: "Flexible schedules aligning with the needs of traditional day scholars, evening adult learners, or students needing intensive weekend extra lessons."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-academy-green-50 rounded-full blur-3xl -z-1" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-academy-yellow-50 rounded-full blur-3xl -z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Bento Cards */}
          <div id="about-visual-grid" className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-academy-green-50 p-6 rounded-3xl border border-academy-green-100 text-center flex flex-col items-center justify-center space-y-2">
              <span className="font-heading font-extrabold text-4xl text-academy-green-700">1st</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Choice in Bulawayo</span>
            </div>
            <div className="bg-slate-900 text-white p-6 rounded-3xl text-center flex flex-col items-center justify-center space-y-2 transform translate-y-4">
              <span className="font-heading font-extrabold text-4xl text-academy-yellow-400">100%</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Dedicated Guidance</span>
            </div>
            <div className="bg-academy-yellow-50 p-6 rounded-3xl border border-academy-yellow-200 text-center flex flex-col items-center justify-center space-y-2">
              <span className="font-heading font-extrabold text-4xl text-academy-yellow-700">O & A</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Level Curricula</span>
            </div>
            <div className="bg-academy-green-50 p-6 rounded-3xl border border-academy-green-100 text-center flex flex-col items-center justify-center space-y-2 transform translate-y-4">
              <span className="font-heading font-extrabold text-4xl text-academy-green-700">300+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Graduates Yearly</span>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div id="about-text-column" className="lg:col-span-7 flex flex-col space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider text-academy-green-700 uppercase block font-mono">
                Who We Are
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Empowering Zimbabwean Scholars to Achieve Professional Heights
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Wise Academy is a distinguished learning institution located in the heart of Bulawayo, Zimbabwe. We specialize in providing comprehensive academic solutions for ZIMSEC Ordinary (O) and Advanced (A) Level students. Whether you are aiming for tertiary qualification, retaking exams to secure your pathways, or needing evening hours, our customized lesson structures are designed specifically for your advancement.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Under the expert steering of our Principal, Mr Moyo, we are proud to offer high-quality schooling alternatives. Our mission goes beyond classroom memorization—we foster logical reasoning, technical problem-solving, and provide real-world support for standard and non-traditional scholars.
            </p>

            {/* Structured Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              <div className="flex flex-col space-y-2">
                <div className="w-10 h-10 rounded-xl bg-academy-green-100 flex items-center justify-center text-academy-green-700 font-semibold shadow-xs">
                  01
                </div>
                <h4 className="font-heading font-bold text-sm text-slate-900">Proven Results</h4>
                <p className="text-xs text-slate-500">Consistently achieving local standards with high-grade student distributions.</p>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="w-10 h-10 rounded-xl bg-academy-green-100 flex items-center justify-center text-academy-green-700 font-semibold shadow-xs">
                  02
                </div>
                <h4 className="font-heading font-bold text-sm text-slate-900">Expert Mentors</h4>
                <p className="text-xs text-slate-500">Taught by highly certified national subject experts with years of ZIMSEC expertise.</p>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="w-10 h-10 rounded-xl bg-academy-green-100 flex items-center justify-center text-academy-green-700 font-semibold shadow-xs">
                  03
                </div>
                <h4 className="font-heading font-bold text-sm text-slate-900">Best Facilities</h4>
                <p className="text-xs text-slate-500">Perfect studying environment equipped with standard libraries and stationery.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic value items underneath */}
        <div id="about-value-cards" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-100">
          {values.map((val, idx) => (
            <div
              key={idx}
              id={`about-value-card-${idx}`}
              className="bg-slate-55/40 backdrop-blur-md p-6 rounded-3xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all group hover:bg-white"
            >
              <div className="w-12 h-12 rounded-2xl bg-academy-green-50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform group-hover:bg-academy-yellow-100">
                {val.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{val.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
