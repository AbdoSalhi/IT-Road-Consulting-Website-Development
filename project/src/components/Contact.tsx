import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Send, Building2, Clock } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('[data-anim]').forEach((node) => {
            (node as HTMLElement).classList.add('!opacity-100', '!translate-y-0');
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-600 bg-primary-50 px-3 py-1.5 rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 section-underline-center">
            Démarrons votre projet ensemble
          </h2>
          <p className="text-neutral-600 mt-6 max-w-2xl mx-auto">
            Notre équipe vous répond sous 48h. Parlons de vos enjeux et de la façon dont nous pouvons
            vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div data-anim className="opacity-0 translate-y-6 transition-all duration-700 lg:col-span-2 space-y-5">
            <div className="bg-gradient-to-br from-primary-600 to-secondary-700 rounded-2xl p-8 text-white">
              <h3 className="font-bold text-lg mb-6">IT-ROAD Consulting</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Adresse</div>
                    <div className="text-sm font-medium">Building Optima Business Center</div>
                    <div className="text-sm font-medium">Sidi Maarouf, Casablanca</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Téléphone</div>
                    <a href="tel:+212702074046" className="text-sm font-medium hover:text-primary-200 transition-colors">
                      +212 (0) 7 02 07 40 46
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Email</div>
                    <a href="mailto:contact@itroad.ma" className="text-sm font-medium hover:text-primary-200 transition-colors">
                      contact@itroad.ma
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Horaires</div>
                    <div className="text-sm font-medium">Lun – Ven : 9h00 – 18h00</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map embed */}
            <div className="rounded-2xl overflow-hidden h-48 border border-neutral-200 bg-white relative">
              <iframe
                title="IT-ROAD Consulting — Casablanca"
                src="https://www.google.com/maps?q=Optima+Business+Center+Sidi+Maarouf+Casablanca&output=embed"
                className="w-full h-full"
                style={{ border: 0, minHeight: '100%' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div data-anim className="opacity-0 translate-y-6 transition-all duration-700 lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Entreprise</label>
                  <input
                    type="text"
                    placeholder="Votre entreprise"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="vous@entreprise.com"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="+212 ..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Votre projet</label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>Sélectionnez un service</option>
                  <option>Transformation Digitale</option>
                  <option>Artificial Intelligence</option>
                  <option>Cloud Consulting</option>
                  <option>Data & Analytics</option>
                  <option>Automation</option>
                  <option>Cybersecurity & Compliance</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Décrivez votre besoin..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-primary-500/40 hover:scale-[1.01]"
              >
                {sent ? (
                  <>Message envoyé avec succès</>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              {sent && (
                <p className="text-center text-sm text-primary-600 font-medium">
                  Merci ! Notre équipe vous recontactera sous 48h.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
