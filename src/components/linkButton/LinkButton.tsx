import React from "react";
import "./linkButton.css";
interface LinkButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  color?: string;
}

export default function LinkButton({ onClick, children }: LinkButtonProps) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        textDecoration: "underline",
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  );
}
