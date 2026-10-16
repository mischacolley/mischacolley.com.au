import { PROJECTS, type Project } from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      <div className="flex h-10 items-center justify-start">
        {/* Plain img: these are static SVGs of wildly different aspect ratios,
            and object-contain inside a fixed box is all the sizing they need.
            The name lives in alt — no card prints it as text. */}
        <img
          src={project.logo.src}
          alt={project.name}
          className="max-h-full max-w-full object-contain object-left"
        />
      </div>
      <p className="mt-2 text-sm leading-snug text-gray-600">
        {project.tagline}
      </p>
      {project.previously && (
        <p className="mt-1 text-xs text-gray-400">{project.previously}</p>
      )}
    </>
  );

  const className = "block";

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} rounded transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand`}
    >
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}

/**
 * Heading plus the project cards. Rendered inside the site drawer — the
 * drawer owns the panel chrome, this owns the list.
 */
export function ProjectsList() {
  return (
    <div>
      <h2 className="text-xs uppercase tracking-widest text-gray-400">
        Projects
      </h2>
      {/* Divided rather than gapped so each project reads as its own row at
          every width. */}
      <ul className="mt-4 divide-y divide-gray-200">
        {PROJECTS.map((project) => (
          <li key={project.name} className="py-4 first:pt-0 last:pb-0">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
