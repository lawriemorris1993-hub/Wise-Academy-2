import { useState } from 'react';
import { Check, Info, HelpCircle, ArrowRight, DollarSign, ShieldAlert } from 'lucide-react';
import { PricePlan } from '../types';

interface PricingProps {
  onPlanSelect: (planName: string) => void;
}

export default function Pricing({ onPlanSelect }: PricingProps) {
  // Pricing plans as explicitly specified in requirements
  const plans: PricePlan[] = [
    {
      id: 'fulltime',
      title: 'Full-time Schooling',
      subtitle: 'Premium day scholar alternative',
      price: '$75',
      period: 'per term',
      badge: 'Most Popular',
      features: [
        'Weekly Continuous Assessments',
        'Standard practical lab demonstrations',
        'ZIMSEC official series examination code',
        'Physical study desk & book reservations',
        'Regular progress reports for guardians',
        'Dedicated mid-week peer study group'
      ]
    },
    {
      id: 'nightschool',
      title: 'Night School Studies',
      subtitle: 'Ideal for rewriting & professionals',
      price: '$75',
      period: 'per term',
      badge: 'Flexible Hours',
      features: [
        'Classes held from 5:00 PM – 8:00 PM',
        'Direct fast-track ZIMSEC syllabus focus',
        'Targeted lesson plans for key concepts',
        'Past exam papers library access included',
        'Adult education certified teachers',
        'Part-time or working scholar flexibility'
      ]
    },
    {
      id: 'extralessons',
      title: 'Extra Lessons',
      subtitle: 'Targeted academic recovery booster',
      price: '$10',
      period: 'per month',
      badge: 'Top Up',
      features: [
        'Flexible custom subject choices',
        'Held on Saturdays and late afternoons',
        'Intensive exam bootcamp access',
        'Highly specific subject worksheet sets',
        'One-on-one rapid question resolution',
        'Continuous performance grading charts'
      ]
    }
  ];

  /* 
    State for the Custom Tuition Cost Calculator
    This is highly useful for Zimbabwean families to customize their budget based on subjects.
  */
  const [calcTier, setCalcTier] = useState<'termly' | 'monthly'>('termly');
  const [numSubjects, setNumSubjects] = useState<number>(3);
  const [includesWisa, setIncludesWisa] = useState<boolean>(true);

  // Computing estimated price
  const estimatedTotal = () => {
    let base = calcTier === 'termly' ? 75 : 10 * numSubjects;
    if (calcTier === 'termly' && numSubjects > 5) {
      // Extra subjects surcharge or premium rate in day school if they take too many (e.g., base includes up to 5 subjects)
      base += (numSubjects - 5) * 8;
    }
    // WISA initiative has a discounted support rate (free or nominal $5 addition)
    if (includesWisa) {
      base += calcTier === 'termly' ? 5 : 2;
    }
    return base;
  };

  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-wider text-academy-green-700 uppercase block font-mono">
            Invest in Success
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Clear, Affordable Educational Fees
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Wise Academy believes in professional, cost-effective tutores. That is why our fees are tailored to support standard household capacities in Zimbabwe. See our prices transparently with zero hidden costs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div id="pricing-plans-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const isFulltime = plan.id === 'fulltime';
            return (
              <div
                key={plan.id}
                id={`price-card-${plan.id}`}
                className={`bg-white rounded-3xl p-8 border hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group ${
                  isFulltime
                    ? 'border-academy-green-600 shadow-lg md:scale-103 md:-translate-y-1'
                    : 'border-slate-200 shadow-sm hover:border-academy-green-300'
                }`}
              >
                {/* Visual Badge details */}
                {plan.badge && (
                  <span
                    className={`absolute -top-3.5 right-6 text-[10px] uppercase tracking-widest font-extrabold px-3.5 py-1 rounded-full shadow-xs border ${
                      isFulltime
                        ? 'bg-gradient-to-r from-academy-yellow-400 to-academy-yellow-600 text-slate-900 border-academy-yellow-300'
                        : 'bg-academy-green-100 text-academy-green-700 border-academy-green-200'
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}

                <div>
                  {/* Package Headlines */}
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-slate-500 text-xs mb-4">
                    {plan.subtitle}
                  </p>

                  {/* Fee tag */}
                  <div className="flex items-baseline space-x-1.5 py-4 border-b border-slate-100 mb-6">
                    <span className="font-heading font-black text-4xl sm:text-5xl text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-slate-550 text-sm font-semibold font-sans">
                      {plan.period}
                    </span>
                  </div>

                  {/* Bullet checklist */}
                  <ul className="space-y-3.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600">
                        <Check className="w-5 h-5 text-academy-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit action */}
                <button
                  id={`select-btn-${plan.id}`}
                  onClick={() => planOnSelectHelper(plan.title, plan.price, plan.period)}
                  className={`mt-8 w-full py-3.5 px-4 rounded-xl text-center font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                    isFulltime
                      ? 'bg-gradient-to-r from-academy-green-600 to-academy-green-700 hover:from-academy-green-700 hover:to-academy-green-800 text-white shadow-md'
                      : 'bg-slate-50 hover:bg-academy-green-50 text-slate-700 hover:text-academy-green-700 border border-slate-200 hover:border-academy-green-300'
                  }`}
                >
                  <span>Select & Apply</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Dynamic calculator and local currency notices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Tuition Budget Estimator */}
          <div id="tuition-calculator-card" className="bg-slate-55/65 border border-slate-200/80 rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-academy-green-700 mb-3 font-mono text-xs font-bold uppercase tracking-wider">
                <span>⚡ Smart Utility</span>
              </div>
              <h3 className="font-heading font-extrabold text-slate-900 text-xl sm:text-2xl mb-2">
                Custom Enrollment Fee Estimator
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                Calculate an approximate estimate depending on your scholar's direct study needs.
              </p>

              {/* Tier options */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-650 uppercase tracking-wide block font-sans">
                    Schooling Arrangement:
                  </label>
                  <div className="flex p-1 bg-slate-200/50 rounded-xl border border-slate-200 w-fit">
                    <button
                      onClick={() => setCalcTier('termly')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        calcTier === 'termly' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-550'
                      }`}
                    >
                      Termly Schooling
                    </button>
                    <button
                      onClick={() => setCalcTier('monthly')}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        calcTier === 'monthly' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-550'
                      }`}
                    >
                      Monthly Extra Lessons
                    </button>
                  </div>
                </div>

                {/* Range bar for number of subjects */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-650 uppercase">
                    <span>Number of Subjects:</span>
                    <span className="text-academy-green-700 text-sm font-extrabold">{numSubjects} Subjects</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={numSubjects}
                    onChange={(e) => setNumSubjects(parseInt(e.target.value))}
                    className="w-full accent-academy-green-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                    <span>1 Subject</span>
                    <span>5 Subjects</span>
                    <span>10 Subjects</span>
                  </div>
                </div>

                {/* Checkbox for WISA Support */}
                <label className="flex items-center space-x-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includesWisa}
                    onChange={(e) => setIncludesWisa(e.target.checked)}
                    className="rounded-md w-4.5 h-4.5 accent-academy-green-600 border-slate-300 focus:ring-academy-green-500"
                  />
                  <div className="text-left">
                    <span className="text-xs font-bold text-slate-900 block leading-tight">WISA Support Support-pack add-on</span>
                    <span className="text-[11px] text-zinc-500">Includes targeted homework masterclasses under the Wise Initiative.</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Total display inside calculator */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-bold block font-mono">
                  Estimated Pricing:
                </span>
                <span className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
                  ${estimatedTotal()}
                </span>
                <span className="text-xs text-slate-500 ml-1">
                  {calcTier === 'termly' ? 'per term' : 'per month'}
                </span>
              </div>
              <a
                href="#contact"
                className="px-5 py-3 bg-academy-green-700 hover:bg-academy-green-800 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center space-x-1"
              >
                <span>Enroll with this Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Local currency guidance notes */}
          <div id="payment-methods-card" className="bg-academy-green-50/50 border border-academy-green-150/70 rounded-3xl p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-academy-green-100 flex items-center justify-center text-academy-green-700">
                <Info className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-extrabold text-slate-900 text-lg sm:text-xl">
                Important Payment Information
              </h3>
              <p className="text-slate-650 text-xs sm:text-sm leading-relaxed">
                Fees at Wise Academy are billed primarily in USD as the standard baseline denomination to cover operational supplies. However, we aim to be exceptionally accommodating for all regional parents and guardians in Zimbabwe:
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start">
                  <Check className="w-4.5 h-4.5 text-academy-green-700 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600">
                    <span className="font-bold text-slate-800">Alternative Options:</span> We support standard mobile wallets (EcoCash) and electronic transfers at prevailing standard regional bank rates.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="w-4.5 h-4.5 text-academy-green-700 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600">
                    <span className="font-bold text-slate-800">Flexible Installment Plans:</span> Termly tuition amounts can be broken into structured installments upon written arrangement with Mr Moyo.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="w-4.5 h-4.5 text-academy-green-700 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600">
                    <span className="font-bold text-slate-800">Exam Board Fees:</span> ZIMSEC registrar examination fees are distinct and collected during the regular national enrollment cycles.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 bg-white border border-academy-green-200/50 rounded-2xl flex items-center space-x-3">
              <ShieldAlert className="w-5 h-5 text-academy-yellow-600 flex-shrink-0" />
              <p className="text-[11px] text-slate-550 font-mono">
                Payment receipts are generated immediately at Cnr 1st Cnr 5th Ave and Jason Moyo office.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );

  function planOnSelectHelper(title: string, price: string, period: string) {
    onPlanSelect(`Hi Mr Moyo, I am inquiring about rolling under the "${title}" plan (${price} ${period}). Please suggest the registration steps.`);
  }
}
