import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/nav/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "week 8 blog",
  description: "my submission for the week 8 next js project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Navbar />
        </div>
        <div className="wrappercontent">
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}
