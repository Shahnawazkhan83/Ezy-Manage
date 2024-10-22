import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EZY | MANAGE",
  description: "EZY|Manage is a comprehensive project management and team collaboration platform designed to streamline workflow, improve productivity, and enhance team communication. It offers a user-friendly interface with tools to manage tasks, track project progress, allocate resources, and set deadlines, all in one centralized hub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
