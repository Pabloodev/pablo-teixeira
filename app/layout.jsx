import FollowCursor from "./ui/components/followCursor";
import "./ui/globals.css";
import { geistSans, geistMono } from "./ui/fonts";

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
        <FollowCursor />
        {children}
      </body>
    </html>
  );
}
