import type { AppProps } from "next/app";
import Layout from "@/components/Layouts/Layout";
import "@/styles/global.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
