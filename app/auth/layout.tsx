import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Image from "next/image";
import coverImage from "@/public/assets/images/coverImage.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section className="flex">
            {children}

            <Image
              src={coverImage}
              alt="coverImage"
              className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat "
            />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
