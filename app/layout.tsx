import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";



export const metadata: Metadata = {
  title: "NoteHub",
  description: "notes",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header/>
          {children}
          <Footer/>
        </TanStackProvider>
      </body>
    </html>
  );
}
