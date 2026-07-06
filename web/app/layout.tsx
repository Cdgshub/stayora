import type { Metadata } from "next";
import "./globals.css";
export const metadata = {
  title: "Stayora",
    description: "Luxury hotels, flights, cars and travel experiences.",
      icons: {
          icon: "/favicon.png",
            },
            };
            export default function RootLayout({
              children,
              }: {
                children: React.ReactNode;
                }) {
                  return (
                      <html lang="en">
                            <body>{children}</body>
                                </html>
                                  );
                                  }