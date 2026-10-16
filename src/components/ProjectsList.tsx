import { PROJECTS, type Project } from "@/lib/projects";

function ProjectCard({
  project,
  nested = false,
}: {
  project: Project;
  /** Children sit smaller, so the parent reads as the heading of the group. */
  nested?: boolean;
}) {
  const body = (
    <>
      {/* Plain img: these are static SVGs of wildly different aspect ratios,
          and object-contain inside a fixed box is all the sizing they need. */}
      {project.logoKind === "badge" ? (
        // A badge does not say the name, so the card has to. Without this,
        // Open Campus renders as an unlabelled 40px square while every
        // wordmark beside it announces itself.
        <div className="flex items-center gap-2.5">
          <img
            src={project.logo.src}
            alt=""
            aria-hidden="true"
            className={`w-auto object-contain ${nested ? "h-6" : "h-8"}`}
          />
          <span
            className={`font-medium leading-tight text-gray-700 ${
              nested ? "text-sm" : "text-base"
            }`}
          >
            {project.name}
          </span>
        </div>
      ) : (
        // The name lives in alt — the artwork already prints it.
        <div className={`flex items-center justify-start ${nested ? "h-8" : "h-10"}`}>
          <img
            src={project.logo.src}
            alt={project.name}
            className="max-h-full max-w-full object-contain object-left"
          />
        </div>
      )}
      <p
        className={`mt-2 leading-snug text-gray-600 ${
          nested ? "text-xs" : "text-sm"
        }`}
      >
        {project.tagline}
      </p>
      {project.previously && (
        <p className="mt-1 text-xs text-gray-400">{project.previously}</p>
      )}
    </>
  );

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      {body}
    </a>
  ) : (
    <div className="block">{body}</div>
  );
}

/**
 * Heading plus the project cards. Rendered inside the site drawer — the
 * drawer owns the panel chrome, this owns the list.
 *
 * Projects with children render them indented behind a hairline, so the
 * group reads at a glance and still does when Open Campus has three or four
 * things under it rather than one.
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

            {project.children && (
              <ul
                // The rule is the whole device: it ties the children to the
                // parent without a label repeating "part of" on every row.
                className="mt-4 space-y-4 border-l border-gray-200 pl-4"
                aria-label={`Part of ${project.name}`}
              >
                {project.children.map((child) => (
                  <li key={child.name}>
                    <ProjectCard project={child} nested />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
