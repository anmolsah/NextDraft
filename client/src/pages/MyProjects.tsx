import { useEffect, useState } from "react";
import type { Project } from "../types";
import { Loader2Icon, PlusIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { dummyProjects } from "../assets/assets";

const MyProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  const fetchProjects = async () => {
    setProjects(dummyProjects);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const deleteProject = async (projectId: string) => {};

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0F13] px-4 md:px-16 lg:px-24 xl:px-32">
      {loading ? (
        <div className="flex items-center justify-center h-[80vh]">
          <Loader2Icon className="size-8 animate-spin text-[#6A6CFF]" />
        </div>
      ) : projects.length > 0 ? (
        <div className="py-10 min-h-[80vh]">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-2xl font-semibold text-white">My Projects</h1>

            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 rounded-md
              text-white active:scale-95 transition
              bg-gradient-to-r from-[#3AA9FF] via-[#6A6CFF] to-[#FF5DB1]
              hover:shadow-[0_0_25px_rgba(255,93,177,0.35)]"
            >
              <PlusIcon size={18} />
              Create New
            </button>
          </div>

          <div className="flex flex-wrap gap-3.5">
            {projects.map((project) => (
              <div
                onClick={() => navigate(`/projects/${project.id}`)}
                key={project.id}
                className="relative group w-72 max-sm:mx-auto cursor-pointer bg-gray-900/60 border border-gray-700 rounded-lg overflow-hidden shadow-md group hover:shadow-indigo-700/30 hover:border-indigo-800/80 transition-all duration-300"
              >
                <div className="relative w-full h-40 bg-gray-900 overflow-hidden border-b border-gray-800">
                  {project.current_code ? (
                    <iframe
                      srcDoc={project.current_code}
                      className="absolute top-0 left-0 w-[1200px] h-[800px] origin-top-left pointer-events-auto"
                      sandbox="allow-scripts allow-same-origin"
                      style={{ transform: "scale(0.25)" }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      <p>No Preview</p>
                    </div>
                  )}
                </div>

                <div className="p-4 text-white bg-linear-180 from-transparent group-hover:from-indigo-950 to-transparent transition-colors">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium line-clamp-2">
                      {project.name}
                    </h2>
                    <button className="px-2.5 py-0.5 mt-1 ml-2 text-xs bg-gray-800 border border-gray-700 rounded-full">
                      Website
                    </button>
                  </div>
                  <p>{project.initial_prompt}</p>
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex justify-between items-center mt-6"
                  >
                    <span className="text-xs text-gray-500">
                      {new Date(project.createdAt).toLocaleDateString()}
                    </span>

                    <div className="flex gap-3 text-white text-sm">
                      <button
                        onClick={() => navigate(`/preview/${project.id}`)}
                        className="px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded-md transition-all"
                      >
                        Preview
                      </button>
                      <button
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className="px-3 py-1.5 bg-white/10 hover:ng-white/15 rounded-m transition-colorsd"
                      >
                        Open
                      </button>
                    </div>
                  </div>
                </div>

                <div onClick={(e) => e.stopPropagation()} className="">
                  <TrashIcon
                    onClick={() => deleteProject(project.id)}
                    className="absolute top-3 right-3 scale-0 group-hover:scale-100 bg-white p-1.5 size-7 rounded text-red-500 text-xl cursor-pointer transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center">
          <h1
            className="text-3xl font-semibold
            bg-gradient-to-r from-[#3AA9FF] via-[#6A6CFF] to-[#FF5DB1]
            bg-clip-text text-transparent"
          >
            You have no projects yet.
          </h1>

          <p className="text-[#B8BBC7] mt-2 max-w-md">
            Start by creating your first AI-powered project with NextDraft.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-2 rounded-md
            text-white active:scale-95 transition
            bg-gradient-to-r from-[#FF5DB1] to-[#FFB547]
            hover:shadow-[0_0_25px_rgba(255,181,71,0.4)]"
          >
            Create New
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProjects;
