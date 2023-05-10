import { ContextProvider } from "@/context/ContextProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "./Toaster";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task app",
  description: "Aplicacion para crear taras",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Navbar />
         <Layout> {children}</Layout>
          <Toaster />
        </ContextProvider>
      </body>
    </html>
  );
}
