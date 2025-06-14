import React from 'react';
import Badge from './badge';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  images?: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'IDE',
    description: 'A modern web-based code editor with syntax highlighting.',
    technologies: [
      'React',
      'TypeScript',
      'CodeMirror',
      'Node.js',
      'PostgreSQL',
      'Prisma',
    ],
    link: 'https://ide.pradee.dev',
    github: 'https://github.com/pradeexsu/ide',
    images: ['/ide.png'],
  },
];

function Projects() {
  return (
    <div className="mt-10 animate-intro">
      <h2 className="text-2xl font-semibold tracking-tighter mb-6">Projects</h2>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-transparent rounded-lg py-6 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">
              {project.link ? (
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center  gap-1"
                  >
                    <span className="decoration-wavy underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-gradient-to-r hover:decoration-from-blue-400 hover:decoration-via-purple-400 hover:decoration-to-pink-400 transition-all duration-300 ">
                      {' '}
                      {project.title}
                    </span>
                    <span className="text-sm -rotate-45 text-gray-300 dark:text-gray-600 select-none">
                      →
                    </span>
                  </a>
                </div>
              ) : (
                project.title
              )}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            {project.images && (
              <div className="flex gap-2 flex-wrap">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="h-36 object-cover  rounded-xl"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
