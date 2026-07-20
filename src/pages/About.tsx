import { Download } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 pt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</h1>

          <div className="card-dark p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Profile</h2>
            <p className="text-gray-500 mb-4">
              I'm an aspiring AI/ML Engineer and Data Science professional with expertise in Python, machine learning models, data visualization, and statistical analysis. I'm passionate about leveraging analytical and problem-solving skills to create scalable AI solutions.
            </p>
            <p className="text-gray-500 mb-4">
              Currently working as an Associate Software Engineer at Thynktech India, developing AI-powered EdTech platforms with RAG architecture, computer vision systems, and advanced ML models. I combine technical expertise with practical problem-solving to deliver impactful solutions.
            </p>
            <p className="text-gray-500">
              My focus areas include Explainable AI, Retrieval-Augmented Generation, Computer Vision, and building end-to-end ML pipelines that drive tangible business value.
            </p>
          </div>

          <div className="card-dark p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Education</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-100">B.E. in Artificial Intelligence and Data Science</h3>
                <p className="text-gray-500">SPPU (Savitribai Phule Pune University) • 2022 - Present • GPA: 8.0/10.0</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-100">Class 12th</h3>
                <p className="text-gray-500">MSBSHSE • 2022 • 64%</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-100">Class 10th</h3>
                <p className="text-gray-500">MSBSHSE • 2020 • 78%</p>
              </div>
            </div>
          </div>

          <div className="card-dark p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-200 mb-2">Languages</h3>
                <p className="text-gray-500">Python, SQL</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-2">Libraries & Frameworks</h3>
                <p className="text-gray-500">NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, PyTorch, FastAPI, LangChain, LangGraph, ChromaDB</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-2">ML/AI Expertise</h3>
                <p className="text-gray-500">Machine Learning, Deep Learning, NLP, RAG, Agentic AI, Multi-Agent Systems, LLM Tool Use & Function Calling, Prompt Engineering, Semantic Search, Explainable AI (SHAP, LIME), Computer Vision (YOLOv8, MediaPipe), ASR (Whisper)</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-2">DBMS & Storage</h3>
                <p className="text-gray-500">MySQL, PostgreSQL, Vector Databases (FAISS, Pinecone), Amazon S3</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-2">Tools & Platforms</h3>
                <p className="text-gray-500">Git, GitHub, VS Code, Jupyter Notebook, Google Colab, MySQL Workbench, MS Excel, Ollama, Docker</p>
              </div>
            </div>
          </div>

          <div className="card-dark p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-100">Associate Software Engineer</h3>
                <p className="text-gray-500 mb-1">Thynktech India • Sep 2025 - Present</p>
                <ul className="text-gray-500 list-disc list-inside space-y-1">
                  <li>Developing and refining ML models for ThynkLearn, an AI-powered EdTech platform</li>
                  <li>Built RAG architecture-based chatbot and automated test generator using AWS S3 and PostgreSQL</li>
                  <li>Implemented real-time proctoring system using MediaPipe Face Mesh, YOLOv8, and DeepFace</li>
                  <li>Developed reading fluency assessment using fuzzy matching and speech recognition</li>
                  <li>Integrated vision-language models (Ollama) for image-based problem solving</li>
                </ul>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-100">Data Analyst Intern</h3>
                <p className="text-gray-500 mb-1">Technohacks Pvt Ltd • Dec 2024 - Jan 2025</p>
                <ul className="text-gray-500 list-disc list-inside space-y-1">
                  <li>Analyzed large datasets to derive actionable insights for clients</li>
                  <li>Visualized data insights using Matplotlib and Seaborn</li>
                  <li>Created dashboards using Power BI</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-dark p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Publications & Certifications</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-100 font-semibold">📄 AeroXAI: An Uncertainty-Aware Causal Explainable AI Framework for Aircraft Engine Predictive Maintenance</p>
                <p className="text-gray-500 text-sm mt-1">International Journal of Research Publication and Reviews (IJRPR) • Vol 7, Issue 6, pp 5595–5607 • June 2026</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-100 font-semibold">📄 Enhancing Aircraft Safety through Explainable AI-Based Failure Detection Systems</p>
                <p className="text-gray-500 text-sm mt-1">International Journal of Research Publication and Reviews (IJRPR) • Vol 6, Issue 11, pp 4376–4379 • November 2025</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-100">🏆 Google AI Workshop (2025)</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-100">✓ Data Engineering – GeeksforGeeks (2025)</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/Rishi_CV.pdf"
              download="Rishi_Verma_CV.pdf"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
