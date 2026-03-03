import { useState, useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowWidth.ts";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiJquery,
  SiTypescript,
  SiMysql,
  SiJest,
} from "react-icons/si";

import "./styles.sass";

type SkillsDataType = {
  name: string;
  level: string;
  icon: React.ReactNode;
};

const skillsData: SkillsDataType[] = [
  { name: "HTML", level: "Intermediate", icon: <FaHtml5 /> },
  { name: "CSS", level: "Intermediate", icon: <FaCss3Alt /> },
  { name: "Sass", level: "Intermediate", icon: <FaSass /> },
  { name: "Tailwind", level: "beginner", icon: <SiTailwindcss /> },
  { name: "JavaScript", level: "Intermediate", icon: <FaJs /> },
  { name: "Jquery", level: "beginner", icon: <SiJquery /> },
  { name: "Node.js", level: "beginner", icon: <FaNodeJs /> },
  { name: "React", level: "Intermediate", icon: <FaReact /> },
  { name: "Next", level: "beginner", icon: <RiNextjsFill /> },
  { name: "TypeScript", level: "beginner", icon: <SiTypescript /> },
  { name: "Git", level: "Intermediate", icon: <FaGitAlt /> },
  { name: "Git Hub", level: "Intermediate", icon: <FaGithub /> },
  { name: "MySQL", level: "beginner", icon: <SiMysql /> },
  { name: "Docker", level: "beginner", icon: <FaDocker /> },
  { name: "Jest", level: "beginner", icon: <SiJest /> },
];

const Skills = () => {
  const width = useWindowWidth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSkills, setCurrentSkills] = useState<SkillsDataType[]>([]);

  useEffect(() => {
    const getStepSize = () => {
      if (width > 900) return 6;
      if (width > 765) return 4;
      return 2;
    };

    const step = getStepSize();

    if (width > 900) {
      setCurrentSkills(skillsData.slice(0, 6));
    }
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + step >= skillsData.length ? 0 : prev + step;
        setCurrentSkills(skillsData.slice(next, next + step));
        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [width]);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Meu kit de ferramentas</h2>
        <p className="section-subtitle">Tecnologias com as quais trabalho</p>

        <div className="skills-notebook">
          <div className="notebook-header"></div>

          <div className="skills-grid">
            {currentSkills?.map((skill) => (
              <div
                key={skill.name}
                className="skill-card"
                role="list"
                aria-label={`${skill.name}, nível ${skill.level}`}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <div className="skill-doodle">
                  <div className="doodle-dots">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="dot"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
