import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Trend Genius",
  description: "AI powered trend content generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
