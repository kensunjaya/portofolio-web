import type { Metadata } from "next";
import "./globals.css";
import { Anonymous_Pro, Poppins } from "next/font/google";
import { Slide, ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/next"
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-anonymous-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kenneth Sunjaya",
  description: "Explore the portfolio of Kenneth Sunjaya, a Software Engineer specializing in web development, machine learning, and problem-solving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${anonymousPro.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="antialiased bg-secondary font-primary text-white overflow-x-hidden">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
          toastStyle={{ fontFamily: 'var(--font-primary)' }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}