import { Oswald, Poppins } from "next/font/google";
import "./globals.css";

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'], // Add other weights if needed
  display: 'swap',
});

export const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '700'], // Add other weights if needed
  display: 'swap',
});


export const metadata = {
  title: "Wellflow - Wellness Session Platform",
  description: "Wellness Session Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
