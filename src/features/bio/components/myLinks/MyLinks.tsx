import LinkButton from "../../../../components/linkButton/LinkButton";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./myLinks.css";

export default function MyLinks() {

  const links = [
    /* {
      label: "Download CV",
      icon: <FaFileDownload />,
      action: () => window.open("https://example.com/my-cv.pdf"),
    },*/

    {
      label: "Instagram",
      icon: <FaInstagram />,
      action: () => window.open("https://www.instagram.com/revived_zack"),
    },
    {
      label: "YouTube",
      icon: <FaYoutube />,
      action: () => window.open("https://www.youtube.com/@slipe678/featured"),
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin />,
      action: () =>
        window.open("https://www.linkedin.com/in/zachary-gonzalez-54352b264"),
    },
    {
      label: "GitHub",
      icon: <FaGithub />,
      action: () => window.open("https://github.com/ZacharyGonzalez"),
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
