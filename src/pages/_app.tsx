import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "@/../apollo-client";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="The best restaurant in the world" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}
