import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Get In Touch</h1>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card-dark p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Email</h3>
            <a href="mailto:rishiv989@gmail.com" className="text-blue-400 hover:text-blue-300 transition">
              rishiv989@gmail.com
            </a>
          </div>
          <div className="card-dark p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Phone</h3>
            <a href="tel:+919648624154" className="text-blue-400 hover:text-blue-300 transition">
              +91 9648624154
            </a>
          </div>
          <div className="card-dark p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/rishiverma2004" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
              rishiverma2004
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
