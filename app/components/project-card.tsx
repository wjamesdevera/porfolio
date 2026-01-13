import React from "react";
import Image from "next/image";
import s from "./project-card.module.scss";

interface ProjectCardProps {
  project_url?: string;
  img_url: string;
  title: string;
  description: string;
  work: string;
  impact: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project_url,
  img_url,
  title,
  description,
  work,
  impact,
  technologies,
}) => {
  return (
    <a href={project_url || ""} className={s.project_card}>
      <div className={`${s.header}`}>
        <div className={s.image_container}>
          <Image
            src={img_url}
            alt={`${title} preview`}
            fill
            objectFit="cover"
          />
        </div>
        <div className={`${s.section} ${s.header_text_section}`}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>

      <div className={`${s.section} ${s.content}`}>
        <div className={s.sub_section}>
          <p className={s.heading}>the work</p>
          <p>{work}</p>
        </div>
        <div className={s.sub_section}>
          <p className={s.heading}>impact</p>
          <p>{impact}</p>
        </div>
      </div>

      <div className={`${s.section} ${s.technologies}`}>
        <ul>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ProjectCard;
