import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";



const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "My Website",
  description: "Next.js + Tailwind + Montserrat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat">
        <Navbar />
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  );
}
