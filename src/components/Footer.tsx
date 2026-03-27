export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-500 hover:text-blue-400 transition">Home</a></li>
              <li><a href="#projects" className="text-gray-500 hover:text-blue-400 transition">Projects</a></li>
              <li><a href="#experience" className="text-gray-500 hover:text-blue-400 transition">Experience</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-blue-400 transition">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-200 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/in/rishiverma2004" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition">LinkedIn</a></li>
              <li><a href="https://github.com/rishiv989" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-200 mb-4">Contact</h3>
            <p className="text-gray-500 hover:text-gray-400 transition">Email: rishiv989@gmail.com</p>
            <p className="text-gray-500 hover:text-gray-400 transition">Phone: +91 9648624154</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Rishi Rajesh Verma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
