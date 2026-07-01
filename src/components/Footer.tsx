import { GraduationCap, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary-800 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold leading-tight">Arya Mentors</div>
                <div className="text-[10px] text-white/60 leading-tight tracking-wider uppercase">
                  SAT | GRE | TOEFL | IELTS | PTE
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4 sm:mb-5">
              A focused coaching center in Kukatpally, Hyderabad helping students prepare for IELTS, GRE, SAT, TOEFL, and PTE.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-5">Quick Links</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {['Home', 'About Us', 'Courses', 'Why Choose Us', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = item.toLowerCase().replace(/ /g, '-');
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/60 text-sm hover:text-gold-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-5">Courses</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {['IELTS', 'GRE', 'SAT', 'TOEFL', 'PTE', 'Spoken English'].map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/60 text-sm hover:text-gold-400 transition-colors"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-5">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">
                  3rd Floor, 945, Vivekanandanagar Main Rd, Kukatpally, Hyderabad, 500072
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+919177754534" className="text-white/60 text-sm hover:text-gold-400 transition-colors">
                  +91 91777 54534
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Mon - Sat: 10:00 AM - 8:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Arya Mentors. All Rights Reserved.
          </p>
          <p className="text-white/40 text-sm">
            LGBTQ+ Friendly Institute
          </p>
        </div>
      </div>
    </footer>
  );
}
