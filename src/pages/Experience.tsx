import { Briefcase, ArrowRight } from 'lucide-react';

export default function Experience() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 pt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Work Experience</h1>

          {/* Thynktech India */}
          <div className="card-dark p-8 mb-8 border-l-4 border-blue-500">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-100">Associate Software Engineer</h2>
                <p className="text-blue-400 font-semibold">Thynktech India</p>
              </div>
              <span className="text-gray-400 whitespace-nowrap ml-4">Sep 2025 - Present</span>
            </div>
            <p className="text-gray-500 mb-6">
              Developing and refining machine learning models for ThynkLearn, an AI-powered EdTech platform. 
              Working across multiple AI/ML domains including RAG systems, computer vision, and NLP.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-200 flex items-center gap-2">
                <Briefcase size={20} className="text-blue-400" />
                Key Achievements & Projects
              </h3>
              
              <div className="bg-gray-950 p-4 rounded-lg border border-gray-800">
                <h4 className="font-semibold text-gray-100 mb-2">RAG-Based AI Teaching Assistant</h4>
                <p className="text-gray-500 text-sm mb-2">
                  Built a fully localized Retrieval-Augmented Generation based AI Teaching Assistant for video-based courses. 
                  Created end-to-end data pipeline extracting audio, generating transcriptions with Faster-Whisper, and converting to vector embeddings. 
                  Developed FastAPI backend with multi-language support (English, Hindi, Marathi).
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-semibold">Tech Stack:</span> Python, FastAPI, RAG, Ollama, LLaMA 3.2, Whisper, Vector Embeddings
                </p>
              </div>

              <div className="bg-gray-950 p-4 rounded-lg border border-gray-800">
                <h4 className="font-semibold text-gray-100 mb-2">Real-time Proctoring System</h4>
                <p className="text-gray-500 text-sm mb-2">
                  Developed AI-powered exam proctoring system using MediaPipe Face Mesh for eye tracking, 
                  YOLOv8 for detecting unauthorized items, and DeepFace for identity verification. 
                  Implemented for ThynkLearn platform with real-time monitoring capabilities.
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-semibold">Tech Stack:</span> Python, MediaPipe, YOLOv8, DeepFace, Computer Vision, FastAPI
                </p>
              </div>

              <div className="bg-gray-950 p-4 rounded-lg border border-gray-800">
                <h4 className="font-semibold text-gray-100 mb-2">Reading Fluency Assessment System</h4>
                <p className="text-gray-500 text-sm mb-2">
                  Created automated system for assessing students' reading fluency using fuzzy matching algorithms 
                  and speech recognition via Whisper ASR. Generates personalized feedback integrated with ThynkLearn.
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-semibold">Tech Stack:</span> Python, Whisper, ASR, NLP, FastAPI, Fuzzy Matching
                </p>
              </div>

              <div className="bg-gray-950 p-4 rounded-lg border border-gray-800">
                <h4 className="font-semibold text-gray-100 mb-2">Vision-Language Model Integration</h4>
                <p className="text-gray-500 text-sm mb-2">
                  Integrated Ollama-based vision-language models to intelligently process and analyze 
                  image-based homework problems. Provides detailed explanations and solutions for students.
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-semibold">Tech Stack:</span> Python, Ollama, Vision-Language Models, Computer Vision, FastAPI
                </p>
              </div>

              <div className="bg-gray-950 p-4 rounded-lg border border-gray-800">
                <h4 className="font-semibold text-gray-100 mb-2">Applied Semantic Search & OpenAI GPT Integration</h4>
                <p className="text-gray-500 text-sm mb-2">
                  Applied semantic search and OpenAI GPT models for generating syllabus-based assessments. 
                  Integrated AWS S3 and PostgreSQL for scalable data storage and retrieval.
                </p>
                <p className="text-xs text-gray-400">
                  <span className="font-semibold">Tech Stack:</span> Python, OpenAI API, Semantic Search, AWS S3, PostgreSQL
                </p>
              </div>
            </div>
          </div>

          {/* Technohacks */}
          <div className="card-dark p-8 border-l-4 border-purple-500">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-100">Data Analyst Intern</h2>
                <p className="text-purple-400 font-semibold">Technohacks Pvt Ltd</p>
              </div>
              <span className="text-gray-400 whitespace-nowrap ml-4">Dec 2024 - Jan 2025</span>
            </div>
            <p className="text-gray-500 mb-6">
              Analyzed large datasets to derive actionable insights. Created comprehensive data visualizations 
              and interactive dashboards for client reporting and decision-making.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-200 flex items-center gap-2">
                <Briefcase size={20} className="text-purple-400" />
                Key Responsibilities
              </h3>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <ArrowRight size={16} className="text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-500">Analyzed large datasets to derive actionable insights for clients</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight size={16} className="text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-500">Visualized data insights using Matplotlib and Seaborn</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight size={16} className="text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-500">Created interactive dashboards using Power BI for business intelligence</span>
                </li>
              </ul>

              <div className="bg-gray-950 p-4 rounded-lg border border-gray-800 mt-4">
                <p className="text-xs text-gray-400">
                  <span className="font-semibold">Tools & Libraries:</span> Python, Pandas, Matplotlib, Seaborn, Power BI, MySQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
