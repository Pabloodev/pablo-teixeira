import Header from "./ui/components/header";

import "./ui/globals.css";
import { geistSans, geistMono } from "./ui/fonts";
import CursorOne from "./ui/components/CursorOne";
import CursorTwo from "./ui/components/CursorTwo";
import CursorThree from "./ui/components/CursorThree";
import CursorFour from "./ui/components/CursorFour";
import Work from "./ui/components/Work";

export const metadata = {
  title: "Pablo Teixeira | Fullstack developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorOne />
        <CursorTwo />
        <CursorThree />
        <CursorFour />
        <Header />
        {children}
      </body>
    </html>
  );
}
