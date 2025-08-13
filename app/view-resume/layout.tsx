import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Mitesh Gupta",
  description: "View and Download Mitesh Gupta's Resume",
};

export default function ViewResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
