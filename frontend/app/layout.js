import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: "WellFlow - Secure Wellness Session",
  description: "A secure wellness session platform with user authentication, draft saving, and auto-save features. Create and share yoga, meditation, and fitness routines safely—protect your content and never lose progress. Start designing seamless wellness experiences today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
