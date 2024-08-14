import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import GoToTopDiv from '../components/elements/GoTotopDiv'

export const metadata: Metadata = {
  title: 'آکادمی برنامه نویسی کَن آی کُد',
  description: "اولین ارائه دهنده متد آموزش معکوس در حوزه برنامه نویسی وب",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="relative mx-auto my-0 max-w-[1024px]">
        <Layout>
          {children}
        </Layout>
        <GoToTopDiv />
      </body>
    </html>
  );
}
