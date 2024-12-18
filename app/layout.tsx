import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
// import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";

import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Spacer } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <Divider className="my-1" />

            <footer className="w-full flex space-x-6 items-center justify-center py-3">
              {siteConfig.navItems.map((item) => (
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              ))}
              {/* <NextLink
                className="flex items-center gap-1 text-current"
                href="/"
                title="MetaGlobal"
              >
                <p className="text-primary">Home</p>
              </NextLink>
              <Spacer x={6} />
              <NextLink
                className="flex items-center gap-1 text-current"
                href="/careers"
                title="MetaGlobal Careers"
              >
                <p className="text-primary">Careers</p>
              </NextLink>
              <Spacer x={6} />
              <NextLink
                className="flex items-center gap-1 text-current"
                href="/about"
                title="MetaGlobal About Us"
              >
                <p className="text-primary">About Us</p>
              </NextLink> */}
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
