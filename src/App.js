import './App.css';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState('All');

  const projects = [
    // === Computational Projects ===
    {
      title: 'Omnivue Interface',
      description:
        'KUKA iiwa robot with a 3D-printed OmniVue casing integrating a NodeMCU, OLED screen, and replaceable end effector. Designed for responsive human-robot interaction (HRI).',
      image: '/assets/computational/Omnivue1.jpg',
      category: 'Computational',
      link: 'https://youtu.be/QoTPj1VQekc?si=ogglsxnfRJModG_L',
    },
    {
      title: 'Sage Gateshead – Parametric Modeling',
      description:
        'Parametric modeling of the Sage Gateshead concert hall using Rhino + Grasshopper. Includes input-driven concert halls, a shell system, and fabrication data.',
      image: '/assets/computational/thumbnail.jpg',
      category: 'Computational',
      pdf: '/assets/computational/VPB_2023_WS_Akaranga_Fidel.pdf',
    },
    {
      title: 'Fiber-Aligned Form Exploration',
      description:
        'Simulated fiber flow curves using streamlines and attractor logic in Grasshopper + Python. Colored and styled to mimic timber composite behavior.',
      image: '/assets/computational/Wood%20image.jpg',
      category: 'Computational',
    },

    // === Engineering Projects ===
    {
      title: 'RC Beam Design',
      description:
        'Manual calculation and reinforcement design of a simply supported rectangular concrete beam using EC2 standards. Includes bending, shear, and serviceability checks.',
      category: 'Engineering',
      pdf: '/assets/engineering/RC%20beam%20design.pdf',
    },
    {
      title: 'General Arrangement Plan',
      description:
        'Complete general arrangement plan for a multistory structure, created in Allplan as part of structural engineering coursework.',
      category: 'Engineering',
      pdf: '/assets/engineering/S-00_General%20Arrangement%20plan.pdf',
    },
    {
      title: 'Revit Architecture',
      description: 'A collaborative model architectural layout done in Autodesk Revit.',
      category: 'Engineering',
      pdf: '/assets/engineering/Fidel.pdf',
    },
    {
      title: 'Railway Design',
      description:
        'Civil engineering railway design project example in accordance with Eurocode.',
      category: 'Engineering',
      pdf: '/assets/engineering/Fidel%20Gatimu%20Railway%20Design.pdf',
    },
    {
      title: 'Collar Roof Design',
      description:
        'Analysis and manual calculation of collar roof structure in accordance with Eurocodes.',
      category: 'Engineering',
      pdf: '/assets/engineering/Collar%20roof%20design%20Sample.pdf',
    },

    // === Programming Projects ===
    {
      title: 'Train Delay Prediction – ML App',
      description:
        'Streamlit app using a machine learning model to predict train delays based on input features.',
      category: 'Programming',
      link: 'https://hachemsfar-db-on-time-main-y0fmip.streamlit.app/',
    },
    {
      title: 'Water Treatment Plant – Streamlit App',
      description:
        'Streamlit web app for visualizing and analyzing water quality and treatment data from a real plant.',
      category: 'Programming',
      link: 'https://example.com/your-water-treatment-app-link',
    },

    // === Research Projects ===
    {
      title: 'Smart Window Control System',
      description:
        'A DIY system for autonomous window control using an Arduino and environmental sensors. Designed to optimize air conditioning based on humidity, CO₂, and temperature.',
      image: '/assets/research/Alexa.jpg',
      category: 'Research',
      pdf: '/assets/research/Research%20paper.pdf',
      link: 'https://arch.rwth-aachen.de/cms/architektur/forschung/publikationen/publikationen-der-hochschulbibliothek/~cmqs/einzelansicht/?file=990640&lidx=1',
    },
    {
      title: 'CoMApp – Construction Management App',
      description:
        'A cloud-based tool integrating real-time Gantt charts with Telegram for construction planning, updates, and team coordination.',
      category: 'Research',
      link: 'https://youtu.be/ws_LA7zq624?si=XexJ8egetcBJt15J',
    },
  ];

  const filters = ['All', 'Computational', 'Engineering', 'Programming', 'Research'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* HERO */}
      <section className="section hero">
        <img src="/profile.jpg" alt="Fidel" className="profile-pic" />
        <h1>Hi, I'm Fidel</h1>
        <p className="tagline">
          I’m a master's student in Construction Robotics blending engineering, computational design, and robotics into smart, scalable systems for the built environment.
        </p>
        <button onClick={scrollToAbout} className="scroll-btn">
          ↓ Learn More
        </button>
      </section>

      {/* ABOUT */}
      <section className="section about" id="about">
        <h2>About Me</h2>
        <p>
          My work explores the intersection of civil engineering, automation, and computational workflows — building tools and systems that rethink how we design and construct.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="section projects" id="projects">
        <h2>Projects</h2>

        <div className="filters">
          {filters.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <div className="card" key={index}>
              {project.image && <img src={project.image} alt={project.title} />}
              <div className="card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.category === 'Research' ? 'View Link' : 'View App'}
                  </a>
                )}
                {project.pdf && (
                  <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                    View PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CV SECTION */}
      <section className="section cv-section" id="cv">
        <h2>CV & Contact</h2>
        <div className="project-grid">
          <div className="card">
            <div className="card-body">
              <h3>CV (English)</h3>
              <p>Download my English-language CV as a PDF.</p>
              <a
                href="/assets/cv/cv-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3>Lebenslauf (Deutsch)</h3>
              <p>Download my CV in German.</p>
              <a
                href="/assets/cv/cv-de.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lebenslauf öffnen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Fidel Gatimu</p>
          <div className="social-links">
            <a href="mailto:fidelgatimu@gmail.com">fidelgatimu@gmail.com</a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/fidelgatimu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="https://github.com/FidelGatimu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
