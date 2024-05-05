import React from "react";
import { Poppins } from "next/font/google";
import localFont from "@next/font/local";
import Script from "next/script";
import { Toaster } from "sonner";

// Font configurations at the module scope
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const monument = localFont({
  src: "../../public/fonts/MonumentExtended-Ultrabold.otf",
  variable: "--font-monument",
});

export default function ServerLayout({ children }) {
  return (
    <>
      <html lang="en" className="light">
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NC6XQPY2SS"
        />
        <Script id="google-analytics">
          {`  window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-NC6XQPY2SS');`}
        </Script>
        <body
          className={`${poppins.className} ${monument.variable} scrollbar-thin scrollbar-thumb-[#BC96E6] scrollbar-track-[#242F40] scrollbar-rounded`}
        >
          {children}
          <Toaster richColors />
        </body>
      </html>
    </>
  );
}
