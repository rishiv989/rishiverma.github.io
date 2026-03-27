import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'RAG-Based AI Teaching Assistant',
      description: 'Fully localized Retrieval-Augmented Generation based AI Teaching Assistant for video-based courses. Built end-to-end data pipeline extracting audio, generating transcriptions with Faster-Whisper, and converting to vector embeddings. FastAPI backend with multi-language support (English, Hindi, Marathi).',
      technologies: ['Python', 'FastAPI', 'RAG', 'Ollama', 'LLaMA 3.2', 'Whisper', 'Vector Embeddings'],
      link: '#',
      github: '#',
    },
    {
      title: 'Explainable AI For Aircraft Failure Diagnosis',
      description: 'XAI-driven predictive maintenance system for aircraft engine monitoring using NASA CMAPSS dataset. Predicts Remaining Useful Life and engine health states using XGBoost and AutoGluon. Integrated SHAP and LIME for interpretability with interactive Streamlit dashboard and 3D digital twin interface.',
      technologies: ['Python', 'XGBoost', 'AutoGluon', 'SHAP', 'LIME', 'Streamlit', 'Three.js'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</h1>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Showcase of my most impactful AI/ML projects. For a complete list of my work experience and all projects undertaken, 
          visit the <a href="/experience" className="text-blue-400 hover:text-blue-300 transition">Work Experience</a> page.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
