interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="card-dark group">
      <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>
      
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-400 mb-2">Technologies:</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="bg-blue-950/40 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-900/50">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-2 px-4 rounded-lg text-center transition font-semibold"
          >
            View Project
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg text-center transition font-semibold border border-gray-700"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
