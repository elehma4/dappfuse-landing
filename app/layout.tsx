import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dappfuse",
  description: "Dappfuse, the on-chain data platform for marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <Script id="mixpanel-script">
          {`            
            window.onload = function() {
                let r = new URL(document.referrer || document.location.href);
                let q = location.search;
                q.length == 0 ? q = "?ref=" + r.hostname : q = q + "&ref=" + r.hostname;
                var url = "https://ops.dappfuse.com/web/t" + q;
                fetch(url, {credentials: 'include'});
            };
          `}
        </Script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
