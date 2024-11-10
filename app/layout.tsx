import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";



const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CrypTIX",
  description: "",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${font.className} w-full h-full`}>
              {children}
      </body>
    </html>
  );
}
