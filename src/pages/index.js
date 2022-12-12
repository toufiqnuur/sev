import Head from "next/head";
import Features from "../components/Features";
import SuperThanks from "../components/SuperThanks";
import BaseLayout from "../components/BaseLayout";
import Hero from "../components/Hero";
import GuestForm from "../components/GuestForm";

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Situs pemendek tautan yang praktis dan cepat"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <GuestForm />
      <Features />
      <SuperThanks />
    </BaseLayout>
  );
}
