import "./globals.css";
import { Navbar } from "@/components/navbar";
import { roboto } from "@/config/fonts-config";
import { Footer } from "@/components/footer";
import { SandPackCSS } from "@/components/sandpack";
import { NAVIGATION_ITEMS } from "@/config/navigation-config";

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
      <head>
        <SandPackCSS />

        <script
          defer
          src="https://eu.umami.is/script.js"
          data-website-id="fafdf776-214a-486e-9e11-646a829c8be3"
        ></script>
      </head>
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <Navbar items={NAVIGATION_ITEMS} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
