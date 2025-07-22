
import { sourceSansPro } from "./fonts";
 import "./globals.css";

export const metadata = {
  title: "Parul Thakur",
  description: "Portfolio Website",
   icons: {
    icon: "/favicon.ico", 
   },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sourceSansPro.className}>
      <body>{children}</body>
    </html>
  );
}
