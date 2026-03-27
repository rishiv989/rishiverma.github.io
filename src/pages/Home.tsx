import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Brain } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-32 pt-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Rishi Rajesh Verma</h1>
          <p className="text-2xl font-semibold mb-8 text-blue-300">AI/ML Engineer & Data Scientist</p>
          <p className="text-lg mb-10 text-gray-400 max-w-2xl mx-auto">
            Aspiring AI/ML Engineer leveraging Python, machine learning, and advanced data analytics to create scalable AI solutions
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-dark p-8 text-center">
              <Brain size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-100 mb-2">AI/ML & Deep Learning</h3>
              <p className="text-gray-500">
                Machine Learning, Deep Learning, NLP, RAG, Computer Vision (YOLOv8), Explainable AI (SHAP, LIME), ASR (Whisper)
              </p>
            </div>
            <div className="card-dark p-8 text-center">
              <Database size={48} className="text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-100 mb-2">Data & Databases</h3>
              <p className="text-gray-500">
                MySQL, PostgreSQL, Vector Databases (FAISS, Pinecone), AWS S3, Data Analysis & Visualization
              </p>
            </div>
            <div className="card-dark p-8 text-center">
              <Code size={48} className="text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-100 mb-2">Tech Stack</h3>
              <p className="text-gray-500">
                Python, FastAPI, PyTorch, Scikit-learn, Pandas, Docker, Git, VS Code, Google Colab
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 hover:text-purple-600 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
