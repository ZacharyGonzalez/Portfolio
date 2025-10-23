import "./card.css";
type CardProp = {
  title: string;
  info: string;
};
export default function Card({ title, info }: CardProp) {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="info">{info}</div>
    </div>
  );
}
