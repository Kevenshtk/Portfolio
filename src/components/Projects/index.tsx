import { useState, useEffect, useRef } from "react";
import useWindowWidth from "../../hooks/useWindowWidth.ts";

import { IoIosRocket, IoMdFolder } from "react-icons/io";

import "./styles.sass";

type ProjectsDataType = {
  id: number;
  title: string;
  preview: string;
  description: string;
  techStack: string[];
  deployUrl: string;
  repoUrl: string;
};

const projectsData: ProjectsDataType[] = [
  {
    id: 1,
    title: "AlfaTech",
    preview:
      "https://kevenshtk.github.io/DevMedia/Modulo%201/projetos/Alfa-Tech/img/telaAlfaTech.png",
    description:
      "Aplicação web desenvolvida para apresentar serviços de hospedagem, com foco em usabilidade e conversão. O projeto destaca funcionalidades, benefícios e planos de forma clara e organizada, proporcionando uma navegação intuitiva e orientada ao usuário.",
    techStack: ["HTML", "Sass"],
    deployUrl:
      "https://kevenshtk.github.io/DevMedia/Modulo%201/projetos/Alfa-Tech/home.html",
    repoUrl:
      "https://github.com/Kevenshtk/DevMedia/tree/main/Modulo%201/projetos/Alfa-Tech",
  },
  {
    id: 2,
    title: "Manhattan - Coffee House",
    preview:
      "https://kevenshtk.github.io/DevMedia/Modulo%201/projetos/Manhattan-Coffee-House/img/telaManhattan-CoffeeHouse.png",
    description:
      "Landing page criada para divulgação de uma cafeteria, com ênfase na identidade visual e experiência do usuário. O projeto valoriza o design moderno e a apresentação do ambiente, transmitindo a essência da marca de forma envolvente.",
    techStack: ["HTML", "Sass"],
    deployUrl:
      "https://kevenshtk.github.io/DevMedia/Modulo%201/projetos/Manhattan-Coffee-House/index.html",
    repoUrl:
      "https://github.com/Kevenshtk/DevMedia/tree/main/Modulo%201/projetos/Manhattan-Coffee-House",
  },
  {
    id: 3,
    title: "Pokédex",
    preview: "https://kevenshtk.github.io/Projetos/img/telaPokedex.png",
    description:
      "Landing page criada para divulgação de uma cafeteria, com ênfase na identidade visual e experiência do usuário. O projeto valoriza o design moderno e a apresentação do ambiente, transmitindo a essência da marca de forma envolvente.",
    techStack: ["Next.js", "TailwindCSS", "Typescript", "PokeAPI"],
    deployUrl: "https://pokedex-gamma-ten-40.vercel.app/",
    repoUrl: "https://github.com/Kevenshtk/Pokedex",
  },
  {
    id: 4,
    title: "Electrum",
    preview: "https://electrum-eta.vercel.app/telaInicial.png",
    description:
      "Aplicação de e-commerce desenvolvida para simular uma loja virtual de eletrônicos. Inclui funcionalidades como listagem de produtos, navegação entre páginas e interação do usuário, com foco em componentização e boas práticas de desenvolvimento front-end.",
    techStack: ["React.js", "Sass", "Spring Boot", "H2", "Jest"],
    deployUrl: "https://electrum-eta.vercel.app",
    repoUrl: "https://github.com/Kevenshtk/Electrum",
  },
  {
    id: 5,
    title: "Rocket Bunny",
    preview:
      "https://kevenshtk.github.io/Projetos/img/prototipoRocketBunny.png",
    description:
      "Redesign do site tra-kyoto.com com foco em modernização do layout e melhoria da experiência do usuário. O projeto prioriza uma interface mais intuitiva, navegação fluida e adaptação responsiva, garantindo consistência e usabilidade tanto em desktop quanto em dispositivos móveis.",
    techStack: ["Figma"],
    deployUrl:
      "https://www.figma.com/proto/6ueBAOL7Qi9JJ2kVg6axSB/Landing-Page-Rocket-Bunny?node-id=1-3&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1&t=CpN996XJm1KFNQnW-1",
    repoUrl: "#",
  },
  {
    id: 6,
    title: "Portfólio Acadêmico",
    preview: "https://portfolio-academico-seven.vercel.app/imgTela.png",
    description:
      "Coleção de projetos desenvolvidos durante o curso de Análise e Desenvolvimento de Sistemas, demonstrando a evolução técnica e aplicação prática de conceitos como lógica de programação, desenvolvimento web e organização de código.",
    techStack: ["React.js", "Sass"],
    deployUrl: "https://portfolio-academico-seven.vercel.app",
    repoUrl: "https://github.com/Kevenshtk/Portfolio-academico",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectsDataType | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const width = useWindowWidth();

  useEffect(() => {
    if (selectedProject && modalRef.current && width <= 768) {
      modalRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedProject, width]);

  const openModal = (project: ProjectsDataType) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <p className="section-subtitle">Um pouco do que já construi</p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.preview} alt={project.title} />
                <div className="project-overlay">
                  <button
                    className="see-more-btn"
                    onClick={() => openModal(project)}
                  >
                    See More
                  </button>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>

            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={selectedProject.preview}
                  alt={selectedProject.title}
                />
              </div>

              <div className="modal-details">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>

                <div className="tech-stack">
                  <h4>Tecnologias:</h4>
                  <div className="tech-tags">
                    {selectedProject.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {selectedProject.deployUrl !== "#" && (
                    <a
                      className="project-link live"
                      href={selectedProject.deployUrl}
                      target="_blank"
                      rel="next"
                    >
                      <IoIosRocket /> {selectedProject.techStack[0] === "Figma" ? "Protótipo" : "Deploy"}
                    </a>
                  )}

                  {selectedProject.repoUrl !== "#" && (
                    <a
                      className="project-link repo"
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="next"
                    >
                      <IoMdFolder /> Repositório
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
