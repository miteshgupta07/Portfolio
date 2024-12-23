import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mitesh Gupta 👨‍💻",
  description: "Works || Mitesh Gupta",
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
