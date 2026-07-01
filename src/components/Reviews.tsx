import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Jai Sri',
    rating: 5,
    date: 'a month ago',
    text: 'I am truly grateful to Arya Mentors for the excellent guidance and support provided during my IELTS preparation. In my opinion, it is one of the finest coaching institutes for IELTS in this area. One of the best aspects of this institute is the personalized attention to writing skills.',
    score: '7 Bands',
  },
  {
    name: 'Manikanta Ramisetty',
    rating: 5,
    date: '2 weeks ago',
    text: 'I had a great experience at this IELTS coaching centre. The trainers in this institute had delivered important lectures and useful tips of IELTS, conducted mock tests on a daily basis and special focus on every individual student. I would highly recommend this institute.',
    score: '7 Bands',
  },
  {
    name: 'Star Boy',
    rating: 5,
    date: '7 months ago',
    text: 'I joined this institute 12 days back and asked sir to train me for IELTS in less than 12 days. They said "We will make it happen!" and truly delivered. Even with the short timeframe, I stuck to the schedule and did all the hard work. They acted as a catalyst.',
    score: 'Target Achieved',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-28 bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gold-400 text-sm font-semibold mb-4 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-gold-400" />
            Student Reviews
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Real Reviews from <span className="text-gold-400">Google</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            These are actual reviews from our students on Google. We are proud of what they have achieved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-800 flex items-center justify-center text-white font-semibold text-sm">
                    {review.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{review.name}</div>
                    <div className="text-white/40 text-xs">{review.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
              </div>

              <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400/40 mb-2" />
              <p className="text-white/70 text-sm leading-relaxed mb-4">{review.text}</p>

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gold-400/15 border border-gold-400/20">
                <span className="text-xs font-semibold text-gold-400">{review.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
