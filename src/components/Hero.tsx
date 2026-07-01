import { ArrowRight, Star, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary-950"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-primary-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(30,74,95,0.3)_0%,_transparent_70%)]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.12)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/15 border border-gold-400/30 mb-6">
              <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
              <span className="text-sm font-semibold text-gold-400">4.9 Google Rating</span>
              <span className="text-sm text-gold-400/80">· 179+ Google Reviews</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Helping Students Achieve Their{' '}
              <span className="text-gold-400">Dream Scores</span> in IELTS, GRE, SAT, TOEFL & PTE
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
              At Arya Mentors, we prepare students for study abroad entrance exams with focused, 
              results-driven coaching. Our students have consistently scored 7+ bands in IELTS and 
              competitive scores in GRE and SAT — helping them get into universities worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-900/30 hover:shadow-xl hover:-translate-y-0.5 min-h-[56px]"
              >
                Book Free Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+919177754534"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm min-h-[56px]"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <span>3rd Floor, Vivekananda Nagar, Kukatpally, Hyderabad</span>
            </div>
          </div>

          <div className="hidden lg:block animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-400/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white/10 rounded-2xl p-5 sm:p-6 text-center animate-float">
                    <Star className="w-6 h-6 text-gold-400 fill-gold-400 mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-extrabold text-gold-400 mb-1">4.9</div>
                    <div className="text-sm text-white/70">Google Rating</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5 sm:p-6 text-center animate-float" style={{ animationDelay: '0.5s' }}>
                    <MessageSquare className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-extrabold text-gold-400 mb-1">179+</div>
                    <div className="text-sm text-white/70">Google Reviews</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5 sm:p-6 text-center animate-float" style={{ animationDelay: '1s' }}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-gold-400 mb-1">5</div>
                    <div className="text-sm text-white/70">International Exam Programs</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5 sm:p-6 text-center animate-float" style={{ animationDelay: '1.5s' }}>
                    <MapPin className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-extrabold text-gold-400 mb-1">Kukatpally</div>
                    <div className="text-sm text-white/70">Hyderabad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 60%, 0 100%)' }} />
    </section>
  );
}
