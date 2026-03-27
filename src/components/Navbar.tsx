import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/95 border-b border-gray-800 shadow-2xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition">Rishi Verma</Link>
        
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-gray-400 hover:text-blue-400 transition duration-300 font-medium">Home</Link>
          <Link to="/projects" className="text-gray-400 hover:text-blue-400 transition duration-300 font-medium">Projects</Link>
          <Link to="/experience" className="text-gray-400 hover:text-blue-400 transition duration-300 font-medium">Experience</Link>
          <Link to="/about" className="text-gray-400 hover:text-blue-400 transition duration-300 font-medium">About</Link>
          <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition duration-300 font-medium">Contact</Link>
        </div>

        <button 
          className="md:hidden text-gray-400 hover:text-blue-400 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-950/95 px-4 py-4 space-y-2 border-t border-gray-800">
          <Link to="/" className="block text-gray-400 hover:text-blue-400 py-2 font-medium">Home</Link>
          <Link to="/projects" className="block text-gray-400 hover:text-blue-400 py-2 font-medium">Projects</Link>
          <Link to="/experience" className="block text-gray-400 hover:text-blue-400 py-2 font-medium">Experience</Link>
          <Link to="/about" className="block text-gray-400 hover:text-blue-400 py-2 font-medium">About</Link>
          <Link to="/contact" className="block text-gray-400 hover:text-blue-400 py-2 font-medium">Contact</Link>
        </div>
      )}
    </nav>
  );
}
