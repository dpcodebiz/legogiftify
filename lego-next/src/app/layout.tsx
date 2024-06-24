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

import styles from "@styles/Display.module.scss";
import { JotaiProvider } from "@components/jotai";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={clsx(inter.className, "bg-gray-100")}>
          <JotaiProvider>
            <div className={styles.heading_container}>
              <span className={styles.heading}>Lego Giftify</span>
              <span className={styles.subheading}>
                Where Lego&apos;s and Gifts come together
              </span>
            </div>
            {children}
          </JotaiProvider>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
