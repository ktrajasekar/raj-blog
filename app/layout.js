import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "./Components/Header";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

//Styles
import "./styles/header.css";

const montserrat = Montserrat({
  weight: ["300", "500", "900", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Personal Blog - Rajasekar Thangavel",
  description: "Front end developer with 8+ experience ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
