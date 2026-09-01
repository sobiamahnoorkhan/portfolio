import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, ExternalLink, ShieldCheck, Github, Linkedin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Construct mailto link for direct real communication
    const subject = encodeURIComponent(`Legal & Tech Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
              <span>Stage 09 / 09</span>
              <span className="text-slate-600">·</span>
              <span>Communication & Inquiries</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight text-depth-3d">
              Let's Connect
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Open to professional legal consultations, procedural case inquiries, and interdisciplinary collaborations in legal technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Details & 3D Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <ScrollReveal direction="right" delay={100}>
              <Card3D intensity={8} depth={15}>
                <div className="p-6 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 rounded-2xl transition-all shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Official Email</span>
                        <h4 className="font-cinzel text-base font-bold text-white">Direct Email</h4>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 cursor-pointer transition-all"
                      title="Copy Email"
                    >
                      {copiedEmail ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="block mt-4 text-sm font-mono text-cyan-300 hover:text-cyan-200 break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* Phone Card */}
            <ScrollReveal direction="right" delay={200}>
              <Card3D intensity={8} depth={15}>
                <div className="p-6 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 rounded-2xl transition-all shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.2)]">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Phone / WhatsApp</span>
                        <h4 className="font-cinzel text-base font-bold text-white">Direct Line</h4>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyPhone}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 cursor-pointer transition-all"
                      title="Copy Phone Number"
                    >
                      {copiedPhone ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="block mt-4 text-sm font-mono text-cyan-300 hover:text-cyan-200"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* GitHub Profile Card */}
            <ScrollReveal direction="right" delay={300}>
              <Card3D intensity={8} depth={15}>
                <div className="p-6 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 rounded-2xl transition-all shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Technical Code Base</span>
                        <h4 className="font-cinzel text-base font-bold text-white">GitHub Profile</h4>
                      </div>
                    </div>

                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs flex items-center gap-1 cursor-pointer transition-all"
                      title="Open GitHub"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-sm font-mono text-cyan-300 hover:text-cyan-200 break-all"
                  >
                    {PERSONAL_INFO.github}
                  </a>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* LinkedIn Profile Card */}
            <ScrollReveal direction="right" delay={350}>
              <Card3D intensity={8} depth={15}>
                <div className="p-6 bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 rounded-2xl transition-all shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.2)]">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Professional Network</span>
                        <h4 className="font-cinzel text-base font-bold text-white">LinkedIn Profile</h4>
                      </div>
                    </div>

                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-400 text-xs flex items-center gap-1 cursor-pointer transition-all"
                      title="Open LinkedIn"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-sm font-mono text-cyan-300 hover:text-cyan-200 break-all"
                  >
                    {PERSONAL_INFO.linkedin}
                  </a>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* Location Card */}
            <ScrollReveal direction="right" delay={400}>
              <Card3D intensity={8} depth={15}>
                <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Jurisdiction & Location</span>
                      <h4 className="font-cinzel text-base font-bold text-white">{PERSONAL_INFO.location}</h4>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-slate-400">
                    Practicing before Subordinate Courts, Hyderabad.
                  </p>
                </div>
              </Card3D>
            </ScrollReveal>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={200} className="h-full">
              <Card3D intensity={6} depth={20} className="h-full">
                <div className="p-8 sm:p-10 bg-slate-900/95 border border-slate-800 rounded-2xl h-full flex flex-col justify-between shadow-2xl">
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquiry Form</span>
                    </div>
                    <h3 className="font-cinzel text-2xl font-bold text-white">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-400">
                      Submit your legal inquiry or project discussion. Messages will open in your default email client addressed directly to Sobia Mahnoor.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-fadeIn">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                      <h4 className="font-cinzel text-lg font-bold text-white">
                        Message Prepared
                      </h4>
                      <p className="text-xs text-slate-300 max-w-sm mx-auto">
                        Thank you for reaching out. Your default email client has been triggered to dispatch your message.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-xs text-cyan-400 underline pt-2"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Advocate, Client, or Collaborator Name"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 text-sm text-white focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. yourname@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 text-sm text-white focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                          Message / Matter Summary
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Detail your inquiry, court matter, or legal technology query..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 text-sm text-white focus:outline-none transition-all resize-none"
                        />
                      </div>

                      <button
                        id="contact-submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-cyan-950 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? 'Preparing Message...' : 'Send Message'}</span>
                      </button>
                    </form>
                  )}

                </div>
              </Card3D>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

