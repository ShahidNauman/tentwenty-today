import Head from "next/head";
import {
  roboto,
  robotoCondensed,
  playfairDisplay,
} from "@/components/Common/GoogleFonts";
import type { LayoutProps } from "@/types/CommonTypes";

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Today</title>
        <meta name="description" content="A Multi-Author Blog using Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        :root {
          --font-roboto: ${roboto.style.fontFamily};
          --font-roboto-condensed: ${robotoCondensed.style.fontFamily};
          --font-playfair-display: ${playfairDisplay.style.fontFamily};
        }
      `}</style>
      <main>{children}</main>
    </>
  );
}

export default Layout;
