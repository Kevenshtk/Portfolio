import { useState } from 'react';

import { IoIosRocket, IoMdFolder } from "react-icons/io";

import './styles.sass';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'Crônicas de Calculária',
      preview: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
      description: 'Um jogo que combina conceitos matemáticos com elementos de aventura inspirados em jogos de RPG.',
      techStack: ['HTML', 'Sass', 'JavaScript'],
      deployUrl: 'https://kevenshtk.github.io/cronicas-de-calcularia/',
      repoUrl: 'https://github.com/Kevenshtk/cronicas-de-calcularia'
    },
    {
      id: 2,
      title: 'Restaurant',
      preview: 'https://kevenshtk.github.io/DevMedia/Modulo%204/projetos/restaurant/public/telaRestaurant.png',
      description: 'Página de cardápio para um restaurante',
      techStack: ['Next.js', 'Sass'],
      deployUrl: 'https://restaurant-black-eight.vercel.app/',
      repoUrl: 'https://github.com/Kevenshtk/Restaurant'
    },
    {
      id: 3,
      title: 'Pokédex',
      preview: 'https://kevenshtk.github.io/Projetos/img/telaPokedex.png',
      description: 'Aplicação web que permite aos usuários buscar e visualizar informações sobre diferentes Pokémons.',
      techStack: ['React.js', 'Sass', 'PokeAPI'],
      deployUrl: 'https://pokedex-gamma-ten-40.vercel.app/',
      repoUrl: 'https://github.com/Kevenshtk/Pokedex'
    },
    {
      id: 4,
      title: 'Electrum',
      preview: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      description: 'Aplicação web de um e-commerce de produtos eletrônicos.',
      techStack: ['React.js', 'Sass', 'Json-server'],
      deployUrl: '#',
      repoUrl: 'https://github.com/Kevenshtk/Electrum'
    }
  ];

  const openModal = (project) => {
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
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.preview} alt={selectedProject.title} />
              </div>
              
              <div className="modal-details">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                
                <div className="tech-stack">
                  <h4>Tecnologias:</h4>
                  <div className="tech-tags">
                    {selectedProject.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-links">
                  <a className="project-link live" href={selectedProject.deployUrl} target="_blank" rel="next">
                    <IoIosRocket />  Deploy
                  </a>
                  <a className="project-link repo" href={selectedProject.repoUrl} target="_blank" rel="next">
                    <IoMdFolder /> Repositório
                  </a>
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
