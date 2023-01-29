import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='A Multi-Author Blog using Next.js' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <div className={styles.logo}>
          <Link href='/'>
            <Image
              src='images/today_logo.svg'
              alt='Today Logo'
              width={190}
              height={65}
              priority
            />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Home;
