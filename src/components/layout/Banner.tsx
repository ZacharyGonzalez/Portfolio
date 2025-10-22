import type { ReactNode } from "react";
import "../styles/banner.css";

type BannerProp = {
  title: string | ReactNode;
};
export default function Banner({ title }: BannerProp) {
  return <div className="banner">{title}</div>;
}
