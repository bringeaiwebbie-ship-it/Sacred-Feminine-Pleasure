import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forward We Grow | Come home to your nature",
  description:
    "Yoga, adventure, art and community. Explore experiences that invite you to reconnect with your own nature.",
  metadataBase: new URL("https://forwardwegrow.com"),
  openGraph: {
    title: "Forward We Grow",
    description: "Yoga, adventure, art and community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}