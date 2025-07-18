import { NextUiProvider } from "@/lib/providers/NextUIProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import ReduxProvider from "@/redux/Provider";
import { Toaster } from "sonner";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "",
  description:
    "Award Winning Service For London Gutter Cleaning, Repairs & Replacement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} antialiased`}
      >
        <NextUiProvider>
          <ReduxProvider>
            {children}
            <Toaster />
          </ReduxProvider>
        </NextUiProvider>
      </body>
    </html>
  );
}
