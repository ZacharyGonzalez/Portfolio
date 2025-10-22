// components/LinkButton.tsx
import React from "react";

interface LinkButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  color?: string;
}

export default function LinkButton({ onClick, children, color = "#0077ff" }: LinkButtonProps) {
  return (
    <span
      onClick={onClick}
      style={{
        color,
        cursor: "pointer",
        textDecoration: "underline",
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}
