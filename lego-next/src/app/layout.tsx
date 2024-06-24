import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "@components/reactQuery";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lego Giftify Next",
  description: "Manage your lego sets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
