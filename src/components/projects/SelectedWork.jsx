import { useState } from "react";
import { projects } from "../../data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectRow } from "./ProjectRow";
import { CaseStudyOverlay } from "../case-studies/CaseStudyOverlay";

export function SelectedWork() {
  const [activeProject, setActiveProject] = useState(null);

  const activeIndex = activeProject
    ? projects.findIndex((p) => p.id === activeProject.id)
    : -1;

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container-editorial">
        <SectionHeading
          index="02"
          label="Selected Work"
          title="A few projects, presented properly."
          description="Real projects spanning business websites, product UI and design systems — each with its own case study."
        />

        <div className="mt-16">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              onOpenCaseStudy={setActiveProject}
            />
          ))}
        </div>
      </div>

      <CaseStudyOverlay
        project={activeProject}
        index={activeIndex}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
