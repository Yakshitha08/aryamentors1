import { UserCheck, Users, MessageCircle, CalendarCheck, ClipboardCheck, Clock } from 'lucide-react';

const reasons = [
  {
    icon: UserCheck,
    title: 'Experienced Trainers',
    description: 'Our trainers have years of experience teaching IELTS, GRE, SAT, TOEFL, and PTE. They know exactly what examiners look for and teach accordingly.',
  },
  {
    icon: Users,
    title: 'Small Batch Sizes',
    description: 'We keep our batches small so that every student gets noticed. No one gets lost in a crowd here.',
  },
  {
    icon: MessageCircle,
    title: 'Personalized Mentoring',
    description: 'Every student learns differently. We identify your weak areas and focus on improving them with one-on-one mentoring sessions.',
  },
  {
    icon: CalendarCheck,
    title: 'Daily Mock Tests',
    description: 'We conduct daily mock tests under real exam conditions so you walk into the actual test with confidence and familiarity.',
  },
  {
    icon: ClipboardCheck,
    title: 'Individual Feedback',
    description: 'You receive detailed, personalized feedback on every writing task and speaking test. We tell you exactly where you stand and what to fix.',
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    description: 'We offer multiple batch timings — morning, afternoon, and evening — so you can balance coaching with college or work.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-600" />
            Why Choose Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Makes Arya Mentors <span className="text-primary-700">Different</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are not a big-name chain. We are a focused team that genuinely cares about your results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group relative bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary-800 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
