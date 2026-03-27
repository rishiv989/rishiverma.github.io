import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Initialize emailjs (replace with your service ID)
      emailjs.init('YOUR_PUBLIC_KEY');

      const templateParams = {
        to_email: 'rishiv989@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-dark p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">Get In Touch</h2>

      {submitted && (
        <div className="mb-4 p-4 bg-green-950/30 text-green-400 rounded-lg border border-green-900/50">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-300 font-semibold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-950 border border-gray-800 rounded-lg text-gray-100 placeholder-gray-700 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
          placeholder="Your name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 font-semibold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-950 border border-gray-800 rounded-lg text-gray-100 placeholder-gray-700 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 font-semibold mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-950 border border-gray-800 rounded-lg text-gray-100 placeholder-gray-700 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
          placeholder="Subject"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-300 font-semibold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 bg-gray-950 border border-gray-800 rounded-lg text-gray-100 placeholder-gray-700 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
          placeholder="Your message"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-gray-700 disabled:to-gray-700 text-white font-semibold py-3 rounded-lg transition"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
