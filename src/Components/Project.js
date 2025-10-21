import React from "react";

function Project({ 
  title, 
  image, 
  description, 
  techstack, 
  designtools, 
  previewLink, 
  githubLink, 
  figmaLink 
}) {
  // Tentukan jenis link kedua
  const isDesignProject = Boolean(figmaLink);
  const secondLink = isDesignProject ? figmaLink : githubLink;
  const secondLabel = isDesignProject ? "Design" : "View Code";

  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <img src={image} alt={title} loading="lazy" />
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
          {title}
        </h1>

        <p className="text-content pt-4 font-light">{description}</p>

        {/* Tampilkan Tech Stack atau Design Tools */}
        {techstack && (
          <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
            Tech Stack : <span className="font-light">{techstack}</span>
          </h3>
        )}
        {!techstack && designtools && (
          <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
            Design Tools : <span className="font-light">{designtools}</span>
          </h3>
        )}

        <div className="flex justify-between items-center mt-5">
          {/* Live Preview */}
          <div className="flex items-center">
            <svg
              className="stroke-dark-heading dark:stroke-white inline-block align-middle"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2867 8.7133C10.6041 8.031 9.67846 7.64771 8.71334 7.64771C7.74821 7.64771 6.82259 8.031 6.14 8.7133L3.56584 11.2866C2.88324 11.9692 2.49976 12.895 2.49976 13.8604C2.49976 14.8257 2.88324 15.7515 3.56584 16.4341C4.24844 17.1167 5.17424 17.5002 6.13959 17.5002C7.10493 17.5002 8.03074 17.1167 8.71334 16.4341L10 15.1475"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.71338 11.2867C9.39597 11.969 10.3216 12.3523 11.2867 12.3523C12.2518 12.3523 13.1775 11.969 13.86 11.2867L16.4342 8.71334C17.1168 8.03074 17.5003 7.10493 17.5003 6.13959C17.5003 5.17424 17.1168 4.24844 16.4342 3.56584C15.7516 2.88324 14.8258 2.49976 13.8605 2.49976C12.8951 2.49976 11.9693 2.88324 11.2867 3.56584L10 4.8525"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a
              href={previewLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light dark:text-white"
            >
              Live Preview
            </a>
          </div>

          {/* View Code / View Design */}
          <div className="flex items-center">
            <svg
              className="dark:fill-light-heading fill-dark-heading inline-block align-middle"
              width={isDesignProject ? "23" : "20"}
              height={isDesignProject ? "23" : "20"}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: isDesignProject ? "1px" : "0" }}
            >
              {isDesignProject ? (
                // Figma Icon
                <path d="M12 12a3 3 0 1 1 0 6h-3v-6h3Zm0-1.5h-3v-6h3a3 3 0 1 1 0 6Zm-4.5 0H4.5v-6H7.5v6ZM7.5 12H4.5v6H7.5v-6Zm4.5-7.5a1.5 1.5 0 1 0 0 3h-3v-3h3Z" />
              ) : (
                // GitHub Icon
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12a12.003 12.003 0 0 0 8.207 11.385c.6.113.793-.26.793-.577v-2.17c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.493.997.107-.776.419-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.932 0-1.31.469-2.382 1.236-3.222-.124-.304-.536-1.527.117-3.183 0 0 1.008-.323 3.303 1.23a11.49 11.49 0 0 1 6.013 0c2.294-1.553 3.3-1.23 3.3-1.23.655 1.656.243 2.879.12 3.183.77.84 1.234 1.912 1.234 3.222 0 4.61-2.804 5.625-5.475 5.921.43.37.823 1.102.823 2.222v3.293c0 .32.192.694.8.576A12.004 12.004 0 0 0 24 12C24 5.373 18.627 0 12 0Z"
                />
              )}
            </svg>
            <a
              href={secondLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light dark:text-white"
            >
              {secondLabel}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;
