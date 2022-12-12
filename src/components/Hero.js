import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Hero() {
  return (
    <Container className="py-16 md:flex md:items-center md:py-24">
      <Image
        src="/hero-illustration.svg"
        width={400}
        height={400}
        alt="hero-illustrtaion"
        priority={true}
        className="md:order-2"
      />
      <div className="mt-8 md:mt-0 md:mr-10">
        <h1 className="text-4xl font-semibold lg:text-5xl">
          Pemendek tautan yang{" "}
          <span className="font-bold text-blue-600">praktis</span> dan{" "}
          <span className="font-bold text-blue-600">cepat</span>
        </h1>
        <p className="mt-4 text-xl text-zinc-500">
          Buat tautanmu jadi simpel dan terlihat profesional
        </p>
        <div className="mt-8">
          <Link
            href="#form-trial"
            className="rounded-lg bg-blue-500 px-4 py-2.5 font-semibold text-white focus:outline-blue-300"
          >
            Coba sekarang
          </Link>
        </div>
      </div>
    </Container>
  );
}
