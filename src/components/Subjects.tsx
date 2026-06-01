import { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  FlaskConical,
  Calculator,
  Laptop,
  Sprout,
  TrendingUp,
  Globe,
  Hourglass,
  Scale,
  Brain,
  MessageSquareCode,
  GraduationCap
} from 'lucide-react';
import { SubjectItem, SubjectDomain } from '../types';

export default function Subjects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStream, setSelectedStream] = useState<SubjectDomain | 'All'>('All');
  const [educationLevel, setEducationLevel] = useState<'O-Level' | 'A-Level'>('O-Level');

  // Core O-Level ZIMSEC subject list as explicitly specified in requirements
  const oLevelSubjects: SubjectItem[] = [
    {
      id: 'maths',
      name: 'Mathematics',
      category: 'Sciences',
      description: 'Essential calculations, algebra, and geometry. Gateway to all technical pathways in Zimbabwe.',
      isOLevel: true,
      isALevel: false // Let's keep separate tracking
    },
    {
      id: 'english',
      name: 'English Language',
      category: 'Arts & Languages',
      description: 'Critical comprehension, vocabulary, and composition skills required for higher education globally.',
      isOLevel: true,
      isALevel: false
    },
    {
      id: 'comb-science',
      name: 'Combined Science',
      category: 'Sciences',
      description: 'Core fusion of Physics, Chemistry, and Biology essentials for general literacy.',
      isOLevel: true,
      isALevel: false
    },
    {
      id: 'physics',
      name: 'Physics',
      category: 'Sciences',
      description: 'Mechanics, electrical circuitry, and thermodynamics. Ideal for future engineers.',
      isOLevel: true,
      isALevel: false
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      category: 'Sciences',
      description: 'Atomic structure, organic synthesis, and laboratory experimentation procedures.',
      isOLevel: true,
      isALevel: false
    },
    {
      id: 'biology',
      name: 'Biology',
      category: 'Sciences',
      description: 'Human physiology, plant cell networks, and ecology mapping.',
      isOLevel: true,
      isALevel: false
    },
    {
      id: 'geography',
      name: 'Geography',
      category: 'Arts & Languages',
      description: 'Climatology, geomorphology, and weather patterns. Excellent for spatial research.',
      isOLevel: true,
      isALevel: false
    },
    {
      id: 'history',
      name: 'History',
      category: 'Arts & Languages',
      description: 'Study of Southern African struggles, pre-colonial empires, and global wars.',
      isOLevel: true,
      isALevel: false
    },
    {
      id: 'accounts',
      name: 'Accounts',
      category: 'Commercials',
      description: 'Double-entry bookkeeping, ledger entries, trial balance analysis, and trading accounts.',
      isOLevel: true,
      isALevel: false
    },
    {
      id: 'commerce',
      name: 'Commerce',
      category: 'Commercials',
      description: 'Core concepts of wholesale, retail, banking systems, protective services, and international transactions.',
      isOLevel: true,
      isALevel: false
    },
    {
      id: 'economics',
      name: 'Economics',
      category: 'Commercials',
      description: 'Micro and macro resource allocation, GDP trends, fiscal policies, and currency valuations.',
      isOLevel: true,
      isALevel: false
    },
    {
      id: 'comp-sci',
      name: 'Computer Science',
      category: 'Sciences',
      description: 'Programming structures, hardware mechanisms, database logic, and digital transformation.',
      isOLevel: true,
      isALevel: false
    },
    {
      id: 'literature',
      name: 'Literature in English',
      category: 'Arts & Languages',
      description: 'Analysis of dramatic novels, local Zimbabwean anthologies, and historical poetry.',
      isOLevel: true,
      isALevel: false
    },
    {
      id: 'agriculture',
      name: 'Agriculture',
      category: 'Practical',
      description: 'Soil sciences, livestock rearing, commercial crop systems. Crucial skill for national development.',
      isOLevel: true,
      isALevel: false
    }
  ];

  // A-Level support because of "ZIMSEC O & A Level Tuition Centre"
  const aLevelSubjects: SubjectItem[] = [
    {
      id: 'a-maths',
      name: 'Pure & Statistics Mathematics (A-Level)',
      category: 'Sciences',
      description: 'Advanced calculus, integration, vectors, and advanced statistics modelling.',
      isOLevel: false,
      isALevel: true
    },
    {
      id: 'a-physics',
      name: 'Physics (A-Level)',
      category: 'Sciences',
      description: 'Quantum properties, wave acoustics, thermal physics, magnetic and electric fields.',
      isOLevel: false,
      isALevel: true
    },
    {
      id: 'a-chem',
      name: 'Chemistry (A-Level)',
      category: 'Sciences',
      description: 'Chemical kinetics, chemical equilibrium, transition elements, and detailed organic mechanisms.',
      isOLevel: false,
      isALevel: true
    },
    {
      id: 'a-bio',
      name: 'Biology (A-Level)',
      category: 'Sciences',
      description: 'Molecular cell biology, genetic inheritance, biodiversity, and ecosystem dynamics.',
      isOLevel: false,
      isALevel: true
    },
    {
      id: 'a-accounts',
      name: 'Accounting (A-Level)',
      category: 'Commercials',
      description: 'Partnership accounts, company balance sheets, cashflow statements, and capital auditing.',
      isOLevel: false,
      isALevel: true
    },
    {
      id: 'a-mob',
      name: 'Business Studies / MOB (A-Level)',
      category: 'Commercials',
      description: 'Strategic management, corporate operational management, marketing, and human resource policies.',
      isOLevel: false,
      isALevel: true
    },
    {
      id: 'a-econ',
      name: 'Economics (A-Level)',
      category: 'Commercials',
      description: 'Key Keynesian theories, international financial structures, deflation curves, and balance of payments.',
      isOLevel: false,
      isALevel: true
    },
    {
      id: 'a-div',
      name: 'Divinity / Religious Studies (A-Level)',
      category: 'Arts & Languages',
      description: 'Detailed study of biblical histories, prophetic literatures, and early Christianity roots.',
      isOLevel: false,
      isALevel: true
    },
    {
      id: 'a-geo',
      name: 'Geography (A-Level)',
      category: 'Arts & Languages',
      description: 'Fluvial hydrology, environmental disasters, global urban planning paradigms.',
      isOLevel: false,
      isALevel: true
    }
  ];

  // Subject icon helper to match aesthetics
  const getSubjectIcon = (name: string, stream: SubjectDomain) => {
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes('math')) return <Calculator className="w-6 h-6 text-emerald-600" />;
    if (lowercaseName.includes('comp') || lowercaseName.includes('software')) return <Laptop className="w-6 h-6 text-emerald-600" />;
    if (lowercaseName.includes('science')) return <FlaskConical className="w-6 h-6 text-emerald-600" />;
    if (lowercaseName.includes('physic')) return <FlaskConical className="w-6 h-6 text-emerald-600" />;
    if (lowercaseName.includes('chemi')) return <FlaskConical className="w-6 h-6 text-emerald-600" />;
    if (lowercaseName.includes('biol')) return <Brain className="w-6 h-6 text-emerald-600" />;
    if (lowercaseName.includes('agriculture')) return <Sprout className="w-6 h-6 text-emerald-600" />;
    if (lowercaseName.includes('account') || lowercaseName.includes('commerce') || lowercaseName.includes('econ')) {
      return <TrendingUp className="w-6 h-6 text-emerald-600" />;
    }
    if (lowercaseName.includes('geography')) return <Globe className="w-6 h-6 text-emerald-650" />;
    if (lowercaseName.includes('history')) return <Hourglass className="w-6 h-6 text-emerald-600" />;
    return <BookOpen className="w-6 h-6 text-emerald-600" />;
  };

  const getStreamColorClass = (stream: SubjectDomain) => {
    switch (stream) {
      case 'Sciences':
        return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'Commercials':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Arts & Languages':
        return 'bg-purple-50 text-purple-700 border-purple-150';
      case 'Practical':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
    }
  };

  const activeSubjects = educationLevel === 'O-Level' ? oLevelSubjects : aLevelSubjects;

  const filteredSubjects = useMemo(() => {
    return activeSubjects.filter((subj) => {
      const matchesSearch =
        subj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subj.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStream = selectedStream === 'All' || subj.category === selectedStream;
      return matchesSearch && matchesStream;
    });
  }, [activeSubjects, searchQuery, selectedStream]);

  return (
    <section id="subjects" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-wider text-academy-green-700 uppercase block font-mono">
            Explore Curricula
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Comprehensive Syllabus Mastery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We deliver detailed lessons, exhaustive tutorial drills, and rigorous exam preparation designed to support high performance and exceptional marks.
          </p>

          {/* O-Level / A-Level Toggle Buttons */}
          <div className="inline-flex p-1.5 bg-slate-200/65 rounded-2xl border border-slate-200 mt-4 shadow-inner">
            <button
              id="toggle-o-level"
              onClick={() => {
                setEducationLevel('O-Level');
                setSelectedStream('All');
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                educationLevel === 'O-Level'
                  ? 'bg-white text-academy-green-850 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🚀 Ordinary (O) Level
            </button>
            <button
              id="toggle-a-level"
              onClick={() => {
                setEducationLevel('A-Level');
                setSelectedStream('All');
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                educationLevel === 'A-Level'
                  ? 'bg-white text-academy-green-850 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🎓 Advanced (A) Level
            </button>
          </div>
        </div>

        {/* Search & Streams Filtration Dashboard */}
        <div id="subjects-dashboard" className="bg-white p-6 rounded-3xl border border-slate-200/70 shadow-lg mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                id="subject-search-input"
                type="text"
                placeholder="Search subject by name (e.g., Accounts, Agriculture)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-slate-250 rounded-2xl text-slate-800 placeholder-slate-450 focus:outline-hidden focus:ring-2 focus:ring-academy-green-500 focus:bg-white text-sm transition-all"
              />
            </div>

            {/* Stream Badges / Filter Lists */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block font-mono md:mr-1">
                Filter:
              </span>
              {(['All', 'Sciences', 'Commercials', 'Arts & Languages', 'Practical'] as const).map((stream) => {
                // If stream is 'Practical' and level is 'A-level', we might skip as there are no items
                if (stream === 'Practical' && educationLevel === 'A-Level') return null;

                const isSelected = selectedStream === stream;
                return (
                  <button
                    key={stream}
                    id={`filter-${stream.toLowerCase().replace(/\s/g, '-')}`}
                    onClick={() => setSelectedStream(stream)}
                    className={`px-4 py-2 text-xs font-bold rounded-xl transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-academy-green-600 to-academy-green-700 text-white shadow-md border-transparent'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {stream}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Subjects list Grid representing high readability */}
        {filteredSubjects.length > 0 ? (
          <div id="subjects-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSubjects.map((subj) => (
              <div
                key={subj.id}
                id={`subject-card-${subj.id}`}
                className="bg-white p-5 rounded-3xl border border-slate-205/85 shadow-xs hover:shadow-md hover:border-academy-green-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top line with Icon and Stream tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 bg-academy-green-50 rounded-2xl flex items-center justify-center group-hover:scale-105 group-hover:bg-academy-yellow-100 transition-transform">
                      {getSubjectIcon(subj.name, subj.category)}
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border tracking-wide font-sans ${getStreamColorClass(
                        subj.category
                      )}`}
                    >
                      {subj.category}
                    </span>
                  </div>

                  {/* Title and details */}
                  <h3 className="font-heading font-extrabold text-slate-900 text-lg group-hover:text-academy-green-700 transition-colors mb-2">
                    {subj.name}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {subj.description}
                  </p>
                </div>

                {/* Footer specs inside the card */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Exam Board: ZIMSEC</span>
                  <span className="text-academy-green-600 font-bold px-1 py-0.5 rounded-sm">
                    {educationLevel} Syllabus
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div id="subjects-empty-state" className="bg-white border border-slate-200 rounded-3xl p-16 text-center shadow-xs">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-1">No subjects found</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              We couldn't find any results matching "{searchQuery}" under "{selectedStream}". Please adjust your parameters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedStream('All');
              }}
              className="mt-4 px-4 py-2 bg-academy-green-600 text-white rounded-xl text-xs font-bold hover:bg-academy-green-700 transition-all cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* O Level Complete Footnote as required */}
        {educationLevel === 'O-Level' && (
          <div className="mt-10 p-5 bg-academy-yellow-50/70 border border-academy-yellow-200 rounded-3xl text-sm text-slate-700 flex flex-col md:flex-row items-center md:justify-between gap-4">
            <div className="flex items-center space-x-3 text-center md:text-left">
              <GraduationCap className="w-8 h-8 text-academy-yellow-600 flex-shrink-0" />
              <div>
                <span className="font-bold block text-slate-900">Registered ZIMSEC Exam Centre Code Available</span>
                <span className="text-xs text-slate-550">We cover core pathways in Sciences, Humanities, Commercials and Practical Agriculture.</span>
              </div>
            </div>
            <a
              href="#contact"
              className="px-4 py-2 bg-academy-yellow-500 hover:bg-academy-yellow-600 text-slate-900 font-bold rounded-xl text-xs transition-all tracking-wide whitespace-nowrap shadow-xs"
            >
              Register Candidate
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
