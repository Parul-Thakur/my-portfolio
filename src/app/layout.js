// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Parul Thakur",
//   description: "Portfolio Website",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
// layout.tsx or root layout file
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
