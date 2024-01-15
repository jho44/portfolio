import type { CSSProperties, ReactNode } from "react";

export default function Card({
  children,
  style = {},
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      className="bg-gradient-to-br from-light-400 to-light-800 rounded-2xl p-4 m-2"
      style={style}
    >
      {children}
    </div>
  );
}
