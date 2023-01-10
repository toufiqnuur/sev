import Head from "next/head";
import BaseLayout from "../components/BaseLayout";
import Container from "../components/Container";
import Image from "next/image";
import GuestForm from "../components/GuestForm";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

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

      {/* # Section Hero */}
      <Container className="py-24 px-8 text-center" id="hero-section">
        <div className="relative md:mx-24 lg:pb-8">
          <h1 className="mx-auto max-w-xl text-[2.8rem] font-semibold leading-[1.2] md:text-7xl">
            Nothing great is made alone.
          </h1>
          <p className="mt-12 text-lg font-normal leading-[1.5] md:px-24 md:text-xl lg:px-40 lg:text-2xl">
            Shorten, track, and share your links with our all-in-one URL
            shortener.
          </p>
          <button
            onClick={() => router.push("#trial-section")}
            className="easy-in-out mt-12 rounded-2xl bg-blue-600 px-4 py-2 text-lg font-medium text-white shadow-xl shadow-blue-600/50 transition delay-100 duration-300 hover:-translate-y-1 md:px-6 md:py-3 md:text-xl"
          >
            Get started
          </button>
          <div className="absolute -z-20 hidden md:-right-48 md:-top-8 md:block lg:-right-64 lg:-top-24">
            <Image
              className=""
              src="/emoji.jpg"
              width={1300}
              height={1000}
              alt=""
              priority
            />
          </div>
        </div>
      </Container>

      {/* # Section Feature  */}
      <Container
        className="relative overflow-x-hidden py-24 md:overflow-visible"
        id="feature-section"
      >
        <div className="mx-auto max-w-6xl rounded-xl border-2 border-gray-100/50 bg-white/25 py-16 px-12 shadow-2xl shadow-blue-600/10 backdrop-blur-md">
          <h3 className="text-center text-3xl font-semibold md:text-5xl">
            It&apos;s{" "}
            <span className="rounded-xl border-b-2 border-blue-600 leading-[1.5] text-blue-600">
              more
            </span>{" "}
            than url shortener
          </h3>
          <div className="mt-12 flex items-center justify-evenly">
            <Image
              className="hidden w-1/3 md:block"
              src="/smart-link.png"
              width={400}
              height={500}
              alt=""
              loading="lazy"
            />
            <div className="space-y-8 font-medium md:w-1/3">
              <div>
                <h5 className=" text-xl font-semibold md:text-2xl">
                  &#9203; Time based link
                </h5>
                <p className="mt-2">
                  Automatically closed your shorten url in certain time
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold md:text-2xl">
                  &#128272; Protected link
                </h5>
                <p className="mt-2">Protect your shorten url with password</p>
              </div>
              <div>
                <h5 className="text-xl font-semibold md:text-2xl">
                  &#9999;&#65039; Custom link
                </h5>
                <p className="mt-2">Define your shorten url name by yourself</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <GuestForm />
    </BaseLayout>
  );
}
