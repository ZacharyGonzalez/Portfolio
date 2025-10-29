import "./projectTile.css";

export default function ProjectTile() {
  const projects = [
    {
      title: "C Chess",
      desc: "Developed a fully functional chess engine in C99, implementing game logic, board rendering, and move validation from scratch.",
      link: "",
    },
    {
      title: "Simple Particle Gravity Simulator",
      desc: "Built a 2D physics simulation using Python, Pygame, and SciPy to visualize gravitational attraction between particles in real time.",
      link: "",
    },
    {
      title: "Multi-Media Recorder",
      desc: "Engineered Python automation scripts to capture desktop video, keystrokes, and audio streams for research and productivity workflows.",
      link: "",
    },
    {
      title: "NJIT Capstone",
      desc: "Designed and deployed a RAG-based AI FAQ bot leveraging Python, LangChain, Cohere, OpenAI APIs, and the MERN stack for real-time question answering in Discord.",
      link: "",
    },
    {
      title: "Portfolio",
      desc: "Developed this interactive portfolio website using React and Vite with modular components and modern UI/UX design principles.",
    },
  ];
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-tile">
          <div className="project-title">{project.title}</div>
          <div className="project-desc">{project.desc}</div>
        </div>
      ))}
    </div>
  );
}
