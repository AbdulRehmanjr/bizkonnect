import "~/styles/globals.css";

import { Lato, Playfair_Display } from 'next/font/google'
import { type Metadata } from "next";
import { Provider } from "~/app/provider";

const text = Lato({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--font-text",
});

const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--font-heading",
});


export const metadata: Metadata = {
  title: "BizzKonnect",
  description: "Connect your local businesses",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${text.variable}`}>
      <body className="grid grid-cols-12">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
