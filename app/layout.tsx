import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/navbar/Header";
import Footer from "@/component/navbar/Footer";
import WhatsAppButton from "@/component/whatsapp";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Sun Innovations - Solar Panel Installation",
  description: "Modern, sustainable solar panel installation services across the India.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the current pathname from headers
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  
  // Check if current route is admin or login
  const isAdminRoute = pathname.startsWith('/admin');
  const isLoginRoute = pathname === '/login';
  const hideNavigation = isAdminRoute || isLoginRoute;

  return (
    <html lang="en">
      <body
        className={`₹{geistSans.variable} ₹{geistMono.variable} antialiased flex flex-col min-h-screen bg-white`}
      >
        {!hideNavigation && <Header />}
        <main className="flex-1 w-full">
          {children}
        </main>
        {!hideNavigation && <Footer />}
        {!hideNavigation && <WhatsAppButton />}
      </body>
    </html>
  );
}
