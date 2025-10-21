import "./componentStyles/slab.css";

type SlabProp = {
  desc?: string;
  title: string;
  link?: string;
};
export default function Slab({ desc, title, link }: SlabProp) {
  const backgroundStyle = link
    ? {
        backgroundImage: `url(${link})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};
  return (
    <div className="slab" style={backgroundStyle}>
      <div>{desc}</div>
      <h1>{title}</h1>
      <div>{link}</div>
    </div>
  );
}
