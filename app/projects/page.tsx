import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";

async function getProjects() {
    const res = await fetch("http://localhost:3000/api/projects", {
        cache: "no-store",
    });
    const data = await res.json();
    return data.projects;
}

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <PageWrapper>
        <main className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p: any) => (
                <ProjectCard key={p.id} {...p}/>
            ))}
        </main>
        </PageWrapper>
    );
}