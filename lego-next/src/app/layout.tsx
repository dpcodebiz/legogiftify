import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ReactQueryClientProvider } from "@components/reactQuery";
import { clsx } from "@/utils/styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lego Giftify",
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
        <body className={clsx(inter.className, "bg-gray-100")}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
