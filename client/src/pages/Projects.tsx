import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Project } from "../types";
import { Loader2Icon } from "lucide-react";

const Projects = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(true);
  const [device, setDevice] = useState<"phone" | "tablet" | "desktop">(
    "desktop"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const fetchProject = async () => {};

  useEffect(() => {
    fetchProject();
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <Loader2Icon className="size-8 animate-spin text-[#6A6CFF]" />
        </div>
      </>
    );
  }

  return project ? (
    <div></div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <p className="text-2xl font-medium text-[#B8BBC7]">
        Unable to load Project.
      </p>
    </div>
  );
};

export default Projects;
