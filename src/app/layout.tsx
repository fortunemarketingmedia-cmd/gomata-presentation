import type { Metadata } from "next";
import RouteScrollReset from "@/components/RouteScrollReset";
import "./globals.css";

const geistSans = { variable: "sans-serif" };
const geistMono = { variable: "monospace" };

export const metadata: Metadata = {
  title: "Gomata Vision LLP",
  description:
    "Real estate investment opportunities by Gomata Vision LLP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden">
        <RouteScrollReset />
        {children}
      </body>
    </html>
  );
}