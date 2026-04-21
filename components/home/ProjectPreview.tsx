"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ProjectCard from "@/components/shared/ProjectCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export default function ProjectPreview() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="section-padding">
      <Container>
        <SectionTitle
          title="Proyek Terbaru"
          subtitle="Beberapa proyek yang telah menggunakan produk kami"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/projects" variant="outline">
            Lihat Semua Proyek
          </Button>
        </div>
      </Container>
    </section>
  );
}
