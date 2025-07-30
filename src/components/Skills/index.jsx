import './styles.sass';

import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss, SiJquery, SiTypescript, SiMysql  } from "react-icons/si";

const Skills = () => {
  const skillsData = [
    { name: 'HTML', level: 'Intermediate', icon: <FaHtml5 /> },
    { name: 'CSS', level: 'Intermediate', icon: <FaCss3Alt /> },
    { name: 'Sass', level: 'Intermediate', icon: <FaSass /> },
    //{ name: 'Tailwind', level: 'beginner', icon: <SiTailwindcss /> },
    { name: 'JavaScript', level: 'Intermediate', icon: <FaJs /> },
    { name: 'Jquery', level: 'beginner', icon: <SiJquery /> },
    { name: 'Node.js', level: 'beginner', icon: <FaNodeJs /> },
    { name: 'React', level: 'Intermediate', icon: <FaReact /> },
    //{ name: 'Next', level: 'beginner', icon: <RiNextjsFill /> },
    //{ name: 'TypeScript', level: 'beginner', icon: <SiTypescript />},
    { name: 'Git', level: 'Intermediate', icon: <FaGitAlt /> },
    { name: 'Git Hub', level: 'Intermediate', icon: <FaGithub /> },
    { name: 'MySQL', level: 'beginner', icon: <SiMysql /> }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Meu kit de ferramentas</h2>
        <p className="section-subtitle">Tecnologias com as quais trabalho</p>
        
        <div className="skills-notebook">
          <div className="notebook-header"></div>
          
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <div className="skill-doodle">
                  <div className="doodle-dots">
                    {Array.from({length: 3}).map((_, i) => (
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
