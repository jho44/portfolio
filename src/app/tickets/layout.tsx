import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buyin' Tickets",
  description: "Lil tool to help buy concert tickets",
};

export default function TicketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-[#f5e2c9] h-screen">{children}</section>;
}
