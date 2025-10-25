import "./splitScreen.css";
import type { ReactNode } from "react";

type SplitScreenProp = {
  left: ReactNode;
  right: ReactNode;
};
export default function SplitScreen({ left, right }: SplitScreenProp) {
  return (
    <div className="split-screen">
      <div className="left-part">{left}</div>
      <div className="right-part">{right}</div>
    </div>
  );
}
