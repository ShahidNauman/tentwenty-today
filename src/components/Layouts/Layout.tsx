import { useEffect } from "react";
import Head from "next/head";
import {
  roboto,
  robotoCondensed,
  playfairDisplay,
} from "@/components/Common/GoogleFonts";
import Header from "@/components/Header/Header";
import type { LayoutProps } from "@/types/CommonTypes";

function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleDarkMode() {
    const htmlClasses = document.documentElement.classList;
    if (htmlClasses.contains("dark")) {
      // Whenever the user explicitly chooses light mode
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      // Whenever the user explicitly chooses dark mode
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }

    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem("theme");
  }

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
      <Header onToggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
    </>
  );
}

export default Layout;
