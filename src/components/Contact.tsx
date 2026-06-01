import { useState, useEffect, FormEvent } from 'react';
import {
  MapPin,
  PhoneCall,
  MessageSquare,
  Send,
  History,
  CheckCircle2,
  Clock,
  User,
  Mail,
  FileText,
  BookmarkCheck
} from 'lucide-react';
import { InquiryForm } from '../types';

interface ContactProps {
  initialPrefilledMessage?: string;
}

export default function Contact({ initialPrefilledMessage }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enrollment');
  const [gradeLevel, setGradeLevel] = useState('O-Level');
  const [message, setMessage] = useState('');

  const [savedInquiries, setSavedInquiries] = useState<InquiryForm[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // Sync initial message prefill if triggered from CTA buttons across the page
  useEffect(() => {
    if (initialPrefilledMessage) {
      setMessage(initialPrefilledMessage);
      setSubject('Enrollment Query');
      // Scroll to contact form smoothly
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialPrefilledMessage]);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const data = localStorage.getItem('wise_academy_inquiries');
    if (data) {
      try {
        setSavedInquiries(JSON.parse(data));
      } catch (e) {
        console.error('Failed to parse inquiries', e);
      }
    }
  }, []);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Kindly fill in all required fields (Name, Email, Message) to proceed.');
      return;
    }

    const newInquiry: InquiryForm = {
      id: `inq-${Date.now()}`,
      name,
      email,
      phone,
      subject,
      gradeLevel,
      message,
      status: 'Pending',
      createdAt: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newInquiry, ...savedInquiries];
    setSavedInquiries(updated);
    localStorage.setItem('wise_academy_inquiries', JSON.stringify(updated));

    // Success Trigger state
    setIsSuccess(true);

    // Reset fields except defaults
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const handleDeleteInquiry = (id: string) => {
    const filtered = savedInquiries.filter(i => i.id !== id);
    setSavedInquiries(filtered);
    localStorage.setItem('wise_academy_inquiries', JSON.stringify(filtered));
  };

  const getWhatsAppPrefilledLink = () => {
    const textMsg = encodeURIComponent(
      `Hi Mr Moyo, my name is ${name || 'Academic Scholar'}. I am inquiring about rolling under Wise Academy's ${gradeLevel} ${subject} stream. Message: ${message || 'Please register my contact detail!'}`
    );
    return `https://wa.me/263775939333?text=${textMsg}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Dynamic graphic grids */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-academy-yellow-100/30 rounded-full blur-3xl -z-1" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-academy-green-100/30 rounded-full blur-3xl -z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-wider text-academy-green-700 uppercase block font-mono">
            Get in Touch
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Connect with Our Academic Registrar
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Enroll today or arrange a free physical consultation with Mr Moyo at our Bulawayo office. Submit your inquiry below, or speed up the process by messaging us directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Contacts and Map */}
          <div id="contact-info-panel" className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-6">
              <h3 className="font-heading font-extrabold text-slate-900 text-xl tracking-tight">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {/* Physical address as explicitly specified */}
                <div id="address-block" className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-academy-green-100/80 flex items-center justify-center text-academy-green-700 font-bold flex-shrink-0">
                    <MapPin className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-bold font-mono uppercase tracking-wider">
                      Office Location
                    </span>
                    <p className="text-slate-800 text-sm font-semibold">
                      Cnr 5th Ave and Jason Moyo Ave
                    </p>
                    <p className="text-slate-500 text-xs">
                      Bulawayo Central Business District, Zimbabwe
                    </p>
                  </div>
                </div>

                {/* WhatsApp contact as explicitly specified */}
                <div id="whatsapp-phone-block" className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-academy-green-100/80 flex items-center justify-center text-academy-green-700 font-bold flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-bold font-mono uppercase tracking-wider">
                      WhatsApp Office
                    </span>
                    <p className="text-slate-800 text-sm font-extrabold">
                      Mr Moyo – +263 775 939 333
                    </p>
                    <p className="text-slate-500 text-xs">
                      Direct admissions, consultation, & timetables inquiries
                    </p>
                  </div>
                </div>

                {/* Direct Dial */}
                <div id="support-phone-block" className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-academy-green-100/80 flex items-center justify-center text-academy-green-700 font-bold flex-shrink-0">
                    <PhoneCall className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block font-bold font-mono uppercase tracking-wider">
                      Land Support / Mobile Call
                    </span>
                    <a href="tel:+263775939333" className="text-academy-green-800 text-sm font-extrabold hover:underline">
                      +263 775 939 333
                    </a>
                    <p className="text-slate-500 text-xs">
                      Available for calls Monday – Saturday (8:00 AM – 5:00 PM)
                    </p>
                  </div>
                </div>
              </div>

              {/* Central Map Illustration Design Card representing 5th and Jason Moyo */}
              <div id="office-mock-map" className="bg-slate-900 text-slate-100 rounded-2xl p-5 border border-slate-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-academy-green-600/10 rounded-full blur-2xl" />
                <h4 className="font-heading font-bold text-xs text-academy-yellow-400 uppercase tracking-widest block font-mono mb-2">
                  🗺️ Campus Navigation Tip
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our tuition centre is positioned perfectly at the corner of <strong>5th Avenue and Jason Moyo Avenue</strong>. We are highly accessible by public transport systems, directly across from the popular city landmarks in central Bulawayo. Look for our signature green and yellow academy banners at the main gate!
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-550 font-mono">
                  <span>Syllabi Registration: Open</span>
                  <span className="text-academy-yellow-405 font-bold">In-person classes: active</span>
                </div>
              </div>
            </div>

            {/* Local Storage Inquiry History Box */}
            {savedInquiries.length > 0 && (
              <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2 text-slate-800 font-bold text-xs sm:text-sm">
                    <History className="w-5 h-5 text-slate-500" />
                    <span>Your Sent Inquiries ({savedInquiries.length})</span>
                  </div>
                  <button
                    onClick={() => setShowHistory(!showHistory)}
                    className="text-xs font-bold text-academy-green-700 hover:underline cursor-pointer"
                  >
                    {showHistory ? 'Hide List' : 'Review List'}
                  </button>
                </div>

                {showHistory && (
                  <div className="space-y-3.5 max-h-60 overflow-y-auto pr-1">
                    {savedInquiries.map((inq) => (
                      <div
                        key={inq.id}
                        className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-slate-800 text-[11px] font-heading">{inq.subject}</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded-sm font-mono uppercase bg-amber-50 border border-amber-200 text-amber-600 flex items-center space-x-0.5">
                              <Clock className="w-2.5 h-2.5" />
                              <span>{inq.status}</span>
                            </span>
                          </div>
                          <span className="text-[10px] text-zinc-400 block font-mono mb-2">{inq.createdAt}</span>
                          <p className="text-slate-600 line-clamp-2 italic">"{inq.message}"</p>
                        </div>
                        
                        <div className="flex justify-between items-center mt-3 pt-2 border-t border-slate-100">
                          <button
                            onClick={() => {
                              // Resend via WhatsApp trigger
                              const textMsg = encodeURIComponent(
                                `Resending Wise Academy Request: My name is ${inq.name}. Selected: ${inq.gradeLevel} ${inq.subject} stream. Message: ${inq.message}`
                              );
                              window.open(`https://wa.me/263775939333?text=${textMsg}`, '_blank');
                            }}
                            className="text-[10px] text-emerald-600 hover:underline font-bold flex items-center"
                          >
                            🚀 Send to Mr Moyo
                          </button>
                          <button
                            onClick={() => handleDeleteInquiry(inq.id)}
                            className="text-[9px] text-red-500 hover:underline font-semibold"
                          >
                            Remove log
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Interaction Form */}
          <div id="contact-form-panel" className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
            
            {isSuccess ? (
              <div id="submission-success-view" className="py-8 text-center space-y-6">
                <div className="w-16 h-16 bg-academy-green-100 rounded-full flex items-center justify-center mx-auto text-academy-green-600 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                    Form Logged Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Wise Academy! Your inquiry has been saved into our school registrars logs.
                  </p>
                </div>

                <div className="p-4 bg-academy-yellow-50/60 border border-academy-yellow-200 rounded-2xl max-w-md mx-auto text-left space-y-3">
                  <span className="font-bold text-slate-900 text-xs uppercase block font-mono text-center border-b border-academy-yellow-200/50 pb-1.5">
                    🚀 Recommended instant action:
                  </span>
                  <p className="text-xs text-slate-650 leading-relaxed text-center">
                    To expedite enrollment, bypass standard callbacks, or book your classes immediately with Principal Mr Moyo, send your details over WhatsApp:
                  </p>
                  <a
                    id="success-whatsapp-button"
                    href={getWhatsAppPrefilledLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-academy-green-600 hover:bg-academy-green-700 text-white rounded-xl text-center font-bold text-xs tracking-wide transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Send Message to Mr Moyo (+263 775 939 333)</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 bg-slate-50 text-slate-650 rounded-xl text-xs font-bold border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
              <form id="wise-academy-admissions-form" onSubmit={handleFormSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                    Candidate Inquiry Form
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    Enter your details to register interest. Field labels marked with (*) are compulsory.
                  </p>
                </div>

                {/* Grid field: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="form-student-name" className="text-xs font-bold text-slate-600 uppercase tracking-wide block">
                      Student / Parent Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400" />
                      <input
                        id="form-student-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Tendai Moyo"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-academy-green-500 focus:bg-white transition-all text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-student-email" className="text-xs font-bold text-slate-600 uppercase tracking-wide block">
                      Enquirer Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400" />
                      <input
                        id="form-student-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. tendai@gmail.com"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-academy-green-500 focus:bg-white transition-all text-slate-800"
                      />
                    </div>
                  </div>
                </div>

                {/* Grid field: Phone number & Schooling Syllabus Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="form-student-phone" className="text-xs font-bold text-slate-600 uppercase tracking-wide block">
                      WhatsApp Phone Number
                    </label>
                    <div className="relative">
                      <PhoneCall className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400" />
                      <input
                        id="form-student-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +263 775 939 333"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-academy-green-500 focus:bg-white transition-all text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-education-bracket" className="text-xs font-bold text-slate-600 uppercase tracking-wide block">
                      Target Level
                    </label>
                    <select
                      id="form-education-bracket"
                      value={gradeLevel}
                      onChange={(e) => setGradeLevel(e.target.value)}
                      className="w-full px-3.5 py-3.2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-academy-green-500 focus:bg-white transition-all text-slate-850"
                    >
                      <option value="O-Level">ZIMSEC Ordinary (O) Level</option>
                      <option value="A-Level">ZIMSEC Advanced (A) Level</option>
                      <option value="Adult Rewrite">Adult Rewrite / Candidates</option>
                      <option value="General Support">General Tutoring Support</option>
                    </select>
                  </div>
                </div>

                {/* Dropdown field: Subject stream interest */}
                <div className="space-y-1.5">
                  <label htmlFor="form-course-subject" className="text-xs font-bold text-slate-600 uppercase tracking-wide block">
                    Inquiry Stream / Subject Category
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400" />
                    <select
                      id="form-course-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-academy-green-500 focus:bg-white transition-all text-slate-850"
                    >
                      <option value="Sciences Stream">Sciences Branch (Maths, Physics, Chem, Biology, Combined Sci)</option>
                      <option value="Commercials Stream">Commercials Branch (Accounts, Commerce, Economics)</option>
                      <option value="Arts, Humanities & Languages">Arts & Humanities Branch (English, Geography, Literature, History)</option>
                      <option value="Practical & Agriculture">Agriculture Practical stream</option>
                      <option value="General Enrollment">Multiple streams enrollment enquiry</option>
                    </select>
                  </div>
                </div>

                {/* Form Message */}
                <div className="space-y-1.5">
                  <label htmlFor="form-student-message" className="text-xs font-bold text-slate-600 uppercase tracking-wide block">
                    Your Message / Specific Requirements *
                  </label>
                  <textarea
                    id="form-student-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your target O/A level subjects combination, previous school details, or flexible timings preferred..."
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-academy-green-500 focus:bg-white transition-all text-slate-800"
                  />
                </div>

                {/* Main Submit actions of the form */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  {/* WhatsApp Speed-dial badge */}
                  <a
                    id="contact-whatsapp-instant"
                    href={getWhatsAppPrefilledLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold border border-emerald-200/50 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                    title="Send prefilled details to Mr Moyo WhatsApp"
                  >
                    <MessageSquare className="w-4.5 h-4.5 text-emerald-600 fill-emerald-600" />
                    <span>Inquire via Instant WhatsApp</span>
                  </a>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-button"
                    type="submit"
                    className="py-3.5 px-6 bg-gradient-to-r from-academy-green-600 to-academy-green-700 hover:from-academy-green-700 hover:to-academy-green-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Save Inquiry & Submit</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
