import "./splitScreen.css";
import type { ReactNode } from "react";

type SplitScreenProp = {
  left: ReactNode;
  right: ReactNode;
};
export default function SplitScreen({ left, right }: SplitScreenProp) {
  return (
    <div className="split-screen">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
