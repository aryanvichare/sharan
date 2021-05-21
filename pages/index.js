import React from "react";
import Head from "next/head";
import Landing from "@/components/Landing";
import Features from "@/components/Features";
import Azure from "@/components/Azure";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Sharan</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Landing />
      <Features />
      <Azure />
      <Footer />
    </React.Fragment>
  );
}
