import { Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'IELTS',
    subtitle: 'International English Language Testing System',
    duration: '4-6 Weeks',
    description: 'Comprehensive training covering all four modules: Listening, Reading, Writing, and Speaking. Daily mock tests and personalized feedback.',
    features: ['All 4 Modules Covered', 'Daily Mock Tests', 'Writing Task Feedback', 'Speaking Practice Sessions'],
    color: 'bg-primary-50 border-primary-200',
    accent: 'text-primary-700',
    btn: 'bg-primary-800',
  },
  {
    title: 'GRE',
    subtitle: 'Graduate Record Examination',
    duration: '8-12 Weeks',
    description: 'In-depth preparation for Verbal Reasoning, Quantitative Reasoning, and Analytical Writing. Strategy-focused approach for high scores.',
    features: ['Verbal & Quantitative', 'Analytical Writing', 'Vocabulary Building', 'Full-Length Mock Tests'],
    color: 'bg-gold-50 border-gold-200',
    accent: 'text-gold-700',
    btn: 'bg-gold-600',
  },
  {
    title: 'SAT',
    subtitle: 'Scholastic Assessment Test',
    duration: '8-10 Weeks',
    description: 'Complete SAT preparation with focus on Math, Evidence-Based Reading, and Writing. Adaptive learning paths for all skill levels.',
    features: ['Math Mastery', 'Reading & Writing', 'Essay Coaching', 'Practice Drills'],
    color: 'bg-primary-50 border-primary-200',
    accent: 'text-primary-700',
    btn: 'bg-primary-800',
  },
  {
    title: 'TOEFL',
    subtitle: 'Test of English as a Foreign Language',
    duration: '4-6 Weeks',
    description: 'Structured course for TOEFL iBT covering Reading, Listening, Speaking, and Writing with emphasis on academic English.',
    features: ['Academic English Focus', 'Speaking Fluency', 'Listening Comprehension', 'Integrated Writing'],
    color: 'bg-gold-50 border-gold-200',
    accent: 'text-gold-700',
    btn: 'bg-gold-600',
  },
  {
    title: 'PTE',
    subtitle: 'Pearson Test of English',
    duration: '3-5 Weeks',
    description: 'Fast-track PTE Academic preparation with computer-based test strategies, pronunciation training, and AI-scoring alignment.',
    features: ['Computer-Based Strategy', 'Pronunciation Training', 'AI Scoring Alignment', 'Time Management'],
    color: 'bg-primary-50 border-primary-200',
    accent: 'text-primary-700',
    btn: 'bg-primary-800',
  },
  {
    title: 'Spoken English',
    subtitle: 'Professional Communication Skills',
    duration: '6-8 Weeks',
    description: 'Build confidence in spoken English with grammar, vocabulary, pronunciation, and real-world conversation practice sessions.',
    features: ['Grammar & Vocabulary', 'Pronunciation', 'Group Discussions', 'Real-World Scenarios'],
    color: 'bg-gold-50 border-gold-200',
    accent: 'text-gold-700',
    btn: 'bg-gold-600',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-600" />
            Our Courses
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Programs Designed for <span className="text-primary-700">Success</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of expertly crafted courses, each tailored to help you achieve your target score with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className={`group relative rounded-2xl border p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${course.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-2xl font-bold ${course.accent}`}>{course.title}</h3>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-medium text-gray-600 shadow-sm`}>
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration}
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3">{course.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{course.description}</p>

              <div className="space-y-2 mb-6">
                {course.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`inline-flex items-center gap-2 w-full justify-center px-5 py-3.5 rounded-xl ${course.btn} text-white font-semibold text-sm hover:opacity-90 transition-all group-hover:shadow-md min-h-[48px]`}
              >
                <BookOpen className="w-4 h-4" />
                Book Free Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
