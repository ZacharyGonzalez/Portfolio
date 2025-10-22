import LinkButton from "../../../../components/LinkButton";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFileDownload,
  FaFacebook,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./componentStyles/myLinks.css";

export default function MyLinks() {
  const navigate = useNavigate();

  const links = [
    /* {
      label: "Download CV",
      icon: <FaFileDownload />,
      action: () => window.open("https://example.com/my-cv.pdf"),
    },*/
    {
      label: "Facebook",
      icon: <FaFacebook />,
      action: () => navigate("/profile"),
    },
    {
      label: "Instagram",
      icon: <FaInstagram />,
      action: () => window.open("https://instagram.com/placeholder"),
    },
    {
      label: "YouTube",
      icon: <FaYoutube />,
      action: () => window.open("https://youtube.com/placeholder"),
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin />,
      action: () => window.open("https://linkedin.com/in/placeholder"),
    },
    {
      label: "GitHub",
      icon: <FaGithub />,
      action: () => window.open("https://github.com/placeholder"),
    },
  ];

  return (
    <div className="my-links">
      {links.map(({ label, icon, action }) => (
        <LinkButton key={label} onClick={action}>
          <span className="icon">{icon}</span>
        </LinkButton>
      ))}
    </div>
  );
}
