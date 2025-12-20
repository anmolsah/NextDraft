import { useEffect, useState } from "react";
import type { Project } from "../types";
import { Loader2Icon, PlusIcon, TrashIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { dummyProjects } from "../assets/assets";
import Footer from "../components/Footer";

const Community = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  const fetchProjects = async () => {
    setProjects(dummyProjects);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

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
            <h1 className="text-2xl font-semibold text-white">
              Published Projects
            </h1>
          </div>

          <div className="flex flex-wrap gap-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/view/${project.id}`}
                target="_blank"
                className="w-72 max-sm:mx-auto cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:border-[#6A6CFF]/60 hover:shadow-[0_0_30px_rgba(106,108,255,0.25)] transition-all"
              >
                <div className="relative w-full h-40 bg-black/40 border-b border-white/10 overflow-hidden">
                  {project.current_code ? (
                    <iframe
                      srcDoc={project.current_code}
                      className="absolute top-0 left-0 w-[1200px] h-[800px] origin-top-left pointer-events-none"
                      sandbox="allow-scripts allow-same-origin"
                      style={{ transform: "scale(0.25)" }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-[#7A7F98]">
                      No Preview
                    </div>
                  )}
                </div>

                <div className="p-4 text-white bg-gradient-to-b from-transparent via-transparent to-black/20">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium line-clamp-2">
                      {project.name}
                    </h2>
                    <span className="px-2.5 py-0.5 mt-1 ml-2 text-xs rounded-full border border-white/10 text-[#B8BBC7]">
                      Website
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-[#B8BBC7] line-clamp-2">
                    {project.initial_prompt}
                  </p>

                  <div className="flex justify-between items-center mt-6">
                    <span className="text-xs text-[#7A7F98]">
                      {new Date(project.createdAt).toLocaleDateString()}
                    </span>

                    <div className="flex gap-3 text-sm">
                      <button className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15 transition-colors flex items-center gap-2">
                        <span className="bg-gray-200 size-4.5 rounded-full text-black font-semibold flex items-center justify-center">
                          {project.user?.name?.slice(0, 1)}
                        </span>
                        {project.user?.name}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center">
          <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#3AA9FF] via-[#6A6CFF] to-[#FF5DB1] bg-clip-text text-transparent">
            You have no projects yet.
          </h1>

          <p className="text-[#B8BBC7] mt-2 max-w-md">
            Start by creating your first AI-powered project with NextDraft.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-2 rounded-md text-white active:scale-95 transition bg-gradient-to-r from-[#FF5DB1] to-[#FFB547] hover:shadow-[0_0_25px_rgba(255,181,71,0.4)]"
          >
            Create New
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Community;
