import "@/styles/global.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/helpers/apollo";
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setInterval(function () {
      setLoading(false);
      // $(".preloader").fadeOut("slow");
    }, 1000);
  });

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Head>
          {/* Title Tag */}
          <title>{"Karma Street View"}</title>
          {/* Meta Description Attribute */}
          <meta name="description" content={"Our platform provides a unique 360° view of businesses, allowing you to virtually step inside and experience what they have to offer."} />
          {/* Meta Robots Attribute */}
          <meta name="robots" content="index, follow" />
          {/* Meta Keywords Attribute (less important nowadays) */}
          <meta
            name="keywords"
            content="KarmaPay, PG, payments, payment gateways"
          />
          {/* Meta Viewport Tag for responsive web design */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* Meta Charset Tag */}
          <meta charSet="UTF-8" />
          {/* Meta Language Tag */}
          <meta httpEquiv="content-language" content="en" />
          {/* Meta Author Tag */}
          <meta name="author" content="CoffeeCodes" />
          {/* Dynamic Open Graph Image */}
          <meta
            property="og:image"
            content={
              "https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/karma-street-view-removebg-preview.png"
            }
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/assets/karma-street-view-removebg-preview.png"
          />
        </Head>
            <Component {...pageProps} />
            <ToastContainer />
      </ApolloProvider>
    </>
  );
}