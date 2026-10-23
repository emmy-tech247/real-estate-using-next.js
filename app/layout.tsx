import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Celestia Estates | Exceptional Property",
    template: "%s | Celestia Estates"
  },
  description: "A refined real estate experience for exceptional homes, apartments and investment property.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
