import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";

import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Include the weights you need
  style: ["normal", "italic"], // Include the styles you need
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
