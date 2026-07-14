import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEEZO Machinery | China Mini Excavators",
  description: "New-machine quality, at a used-machine price. 1.5–1.8t mini excavators sourced and exported by 20-year industry experts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen blueprint-bg">
        {children}
      </body>
    </html>
  );
}