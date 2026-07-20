import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-500 hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/projects" className="text-gray-500 hover:text-blue-400 transition">Projects</Link></li>
              <li><Link to="/experience" className="text-gray-500 hover:text-blue-400 transition">Experience</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-blue-400 transition">About</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-200 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/in/rishiverma2004" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition">LinkedIn</a></li>
              <li><a href="https://github.com/rishiv989" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-200 mb-4">Contact</h3>
            <p className="text-gray-500">
              <a href="mailto:rishiv989@gmail.com" className="hover:text-blue-400 transition">rishiv989@gmail.com</a>
            </p>
            <p className="text-gray-500 mt-1">
              <a href="tel:+919648624154" className="hover:text-blue-400 transition">+91 9648624154</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-600">
          <p>&copy; {year} Rishi Rajesh Verma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
