import type { Metadata } from "next";
import Sidebar from "@/components/sidebar";

import "styles/globals.css";

export const metadata: Metadata = {
  title: "Next.js Boilerplate",
  description: "A simple boilerplate for next.js",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="flex flex-row">
        <Sidebar/> 
        <div className="w-full bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}