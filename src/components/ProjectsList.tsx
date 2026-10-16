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

export default function ProjectsAside() {
  return (
    // From lg up this leaves the page flow entirely and pins itself to the
    // left edge of the viewport, full height. Below lg it is an ordinary
    // rounded card sitting in the stack.
    <aside
      className="w-full rounded-lg bg-gray-50 p-6 lg:fixed lg:inset-y-0 lg:left-0 lg:z-10 lg:flex lg:w-64 lg:flex-col lg:overflow-y-auto lg:rounded-none lg:border-r lg:border-gray-200 lg:p-8"
      aria-label="Projects I'm working on"
    >
      {/* my-auto rather than justify-center on the parent: it centres the
          same way but still scrolls from the top if the list ever outgrows a
          short viewport. */}
      <div className="lg:my-auto">
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
    </aside>
  );
}
