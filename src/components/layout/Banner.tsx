import "../styles/banner.css";

type BannerProp = {
  title: string;
};
export default function Banner({ title }: BannerProp) {
  return <div className="banner">{title}</div>;
}
