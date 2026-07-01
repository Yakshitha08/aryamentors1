export default function Map() {
  return (
    <section id="map" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-28">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-600" />
            Find Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Visit Our <span className="text-primary-700">Institute</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are conveniently located in Kukatpally, Hyderabad. Drop by for a free consultation.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.484653365117!2d78.4079!3d17.4856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b0f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sArya%20Mentors!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Arya Mentors Location"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
