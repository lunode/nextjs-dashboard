import "@/app/ui/global.css";
import { Inter } from "next/font/google";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "antialiased"}>{children}</body>
    </html>
  );
}
