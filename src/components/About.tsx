import { Target, Users, Award, BookOpen } from 'lucide-react';

const stats = [
  { icon: Award, value: '4.9', label: 'Google Rating' },
  { icon: Users, value: '1000+', label: 'Students Trained' },
  { icon: BookOpen, value: '5', label: 'International Exam Programs' },
  { icon: Target, value: 'Kukatpally', label: 'Hyderabad, India' },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-600" />
              About Us
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5 sm:mb-6 leading-tight">
              Focused Coaching for Students Who Want to{' '}
              <span className="text-primary-700">Study Abroad</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Arya Mentors is a coaching center in Kukatpally, Hyderabad, dedicated to helping students 
              crack IELTS, GRE, SAT, TOEFL, and PTE. We do not believe in a one-size-fits-all approach. 
              Every student gets personalized attention, and our trainers work closely with each one to 
              identify their weaknesses and improve them.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Our classes are kept deliberately small so that every student receives individual feedback. 
              We conduct daily mock tests, provide detailed writing and speaking reviews, and help students 
              build the confidence they need to walk into the exam hall and perform their best.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Many of our students have gone on to study in universities across the US, UK, Canada, and Australia. 
              We are proud to be part of that journey.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 sm:-inset-4 bg-primary-100 rounded-3xl rotate-3" />
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                <img
                  src="https://images.pexels.com/photos/4778626/pexels-photo-4778626.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Students preparing for exams"
                  className="w-full h-44 sm:h-48 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Writing practice session"
                  className="w-full h-52 sm:h-56 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <img
                  src="https://images.pexels.com/photos/5905612/pexels-photo-5905612.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Study group discussion"
                  className="w-full h-52 sm:h-56 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/4778666/pexels-photo-4778666.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="One-on-one mentoring"
                  className="w-full h-44 sm:h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
