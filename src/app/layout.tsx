import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "$BENITO | El Conejo Malo of Crypto | Super Bowl LX Halftime Coin",
  description:
    "The official meme coin of the Super Bowl LX halftime show. Bad Bunny hits the stage, $BENITO hits the blockchain. Fair launch on Pump.fun. Solana.",
  keywords: [
    "BENITO",
    "Bad Bunny",
    "Super Bowl",
    "meme coin",
    "Solana",
    "pump.fun",
    "halftime show",
    "crypto",
    "Super Bowl LX",
    "bad bunny halftime",
    "bad bunny super bowl",
    "benito coin",
  ],
  metadataBase: new URL("https://www.badbunnyhalftime.net"),
  openGraph: {
    title: "$BENITO | El Conejo Malo of Crypto",
    description:
      "Bad Bunny hits the stage. $BENITO hits the blockchain. The Super Bowl LX halftime meme coin.",
    type: "website",
    url: "https://www.badbunnyhalftime.net",
    siteName: "$BENITO - Bad Bunny Halftime Coin",
  },
  twitter: {
    card: "summary_large_image",
    title: "$BENITO | El Conejo Malo of Crypto",
    description:
      "Bad Bunny hits the stage. $BENITO hits the blockchain. The Super Bowl LX halftime meme coin.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
