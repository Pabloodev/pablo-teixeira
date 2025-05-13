import { ArrowRight } from "lucide-react";

// Data
import { projects } from "../../data/projects";

export default function CardProject() {
  return (
    <div className="flex gap-10">
      {projects.map((project) => {
        return (
          <div className="border-1 border-gray-400 p-10 flex gap-10 rounded-lg" key={project.id}>
            <div className="flex-col flex gap-4">
              <div className="flex justify-between text-yellow-300">
                <span>{project.id}</span>
                <span>{project.ano}</span>
              </div>

              <h2 className="text-2xl">{project.title}</h2>

              <ul className="flex items-center gap-5 text-gray-400">
                {project.tags.map((tag, index) => (
                  <li key={index}>
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>

              <p className="max-w-[300]">{project.description}</p>

              <button className="cursor-pointer flex gap-2 hover:text-blue-300 transition duration-700 ease-in-out">
                <span>expand project</span>
                <ArrowRight />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
