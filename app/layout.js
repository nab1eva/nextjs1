import FrontNav from "@/components/navs/nav";
import "@/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "@/components/navs/nav";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Vodiy Parfume",
  description: "E-commerce site for shops!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <body>
        <Nav />
  
          <main>{children}</main>
    
        <Footer />
      </body>
    </html>
  );
}
