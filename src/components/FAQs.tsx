import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What courses do you offer at Arya Mentors?',
    answer: 'We offer comprehensive coaching for IELTS, GRE, SAT, TOEFL, PTE, and Spoken English. Each course is designed with a structured curriculum and regular assessments.',
  },
  {
    question: 'How long does it take to complete the IELTS course?',
    answer: 'Our IELTS course typically takes 4 to 6 weeks to complete. However, we also offer intensive short-term programs for students with urgent deadlines.',
  },
  {
    question: 'Do you provide study materials and mock tests?',
    answer: 'Yes, we provide comprehensive, up-to-date study materials curated by our expert trainers. We also conduct daily mock tests and full-length practice exams under real test conditions.',
  },
  {
    question: 'Can I get personalized feedback on my writing and speaking?',
    answer: 'Absolutely. We provide one-on-one feedback sessions for writing tasks and speaking practice. Our trainers identify your weak areas and help you improve with targeted strategies.',
  },
  {
    question: 'What are the batch timings?',
    answer: 'We offer flexible batch timings including morning, afternoon, and evening batches to accommodate students and working professionals. Please contact us for the current schedule.',
  },
  {
    question: 'Is there a free demo class available?',
    answer: 'Yes! We offer a free demo class so you can experience our teaching methodology and interact with our trainers before enrolling. Book your free demo through our contact form.',
  },
  {
    question: 'Where is your institute located?',
    answer: 'We are located at 3rd Floor, 945, Vivekanandanagar Main Road, Vivekananda Nagar, Kukatpally, Hyderabad, Telangana 500072.',
  },
  {
    question: 'Do you help with university applications?',
    answer: 'While our primary focus is exam preparation, we do provide guidance on score requirements and best practices for university applications.',
  },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-600" />
            FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-primary-700">Questions</span>
          </h2>
          <p className="text-gray-600">
            Got questions? We have answers. If you need more help, feel free to contact us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-600 shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
