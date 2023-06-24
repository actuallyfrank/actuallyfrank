import "./globals.css";
import { Navbar } from "@/components/navbar";
import { NAVIGATION_ITEMS } from "./config";
import { roboto } from "@/components/fonts";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Frank Hartman",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${roboto.className} min-h-screen flex flex-col`}>
          <Navbar items={NAVIGATION_ITEMS} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
