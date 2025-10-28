import "./projectTile.css";

export default function ProjectTile() {
  const projects = [
    { title: "C Chess", desc: "Chess made entirely in c99.", link: "" },
    {
      title: "Music Match",
      desc: "Ethical webscraper for dataset collection.",
      link: "",
    },
    {
      title: "Multi-Media Recorder",
      desc: "Python scripts for recording desktop, keyboard, and audio.",
      link: "",
    },
    {
      title: "NJIT Capstone",
      desc: "RAG AI discord FAQ Bot with MERN stack dashboard for admin monitoring and logging.",
      link: "",
    },
    {
      title: "Prio",
      desc: "This very website is nicknamed Prio as it is currently my priority.",
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
