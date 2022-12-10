import copy from "copy-to-clipboard";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { insertUrlGuestMode } from "../utils/supabase";

export default function Home() {
  const [inputUrl, setInputUrl] = useState("");
  const [resultUrl, setResultUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGuestGenerateLink = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { data, error } = await insertUrlGuestMode(inputUrl);
    if (error) {
      console.error(error);
    } else {
      setResultUrl(`sev.my.id/${data[0].slug}`);
      setInputUrl("");
      setLoading(false);
    }
  };

  const copyUrl = () => {
    copy(resultUrl);
    toast("Copied to clipboard", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Situs pemendek tautan yang praktis dan cepat"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg--doodle">
        <div className="mx-auto max-w-screen-lg px-4 pt-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              sev.my.id
            </Link>
            <Link
              href="/auth"
              className="rounded border border-white bg-white/10 px-4 py-2 text-white"
            >
              Login/register
            </Link>
          </div>
          <div className="py-32 md:text-center">
            <h1 className="text-4xl font-bold text-zinc-100">
              Pemendek tautan yang <u>praktis</u> dan <u>cepat!</u>
            </h1>
            <p className="mt-4 text-xl text-zinc-200">
              Tak perlu login, kami tidak memaksa.
            </p>
            <form
              className="mt-10 flex flex-wrap gap-4 md:justify-center"
              onSubmit={handleGuestGenerateLink}
            >
              {!!resultUrl ? (
                <div className="flex flex-wrap gap-4 md:justify-center">
                  <input
                    className="rounded bg-white px-4 py-2 text-blue-600"
                    type="text"
                    value={resultUrl}
                    disabled
                  />
                  <button
                    className="rounded border border-white bg-white/10 px-4 py-2 font-bold text-white"
                    onClick={copyUrl}
                  >
                    Copy
                  </button>
                  <button
                    className="rounded border border-white bg-white/10 px-4 py-2 font-bold text-white"
                    onClick={() => setResultUrl("")}
                  >
                    Reset
                  </button>
                  <p className="w-full text-white">
                    *Note: Pada mode tamu link akan kadaluarsa setelah 7 hari
                  </p>
                </div>
              ) : (
                <>
                  <input
                    type="url"
                    name="url"
                    value={inputUrl}
                    placeholder="https://your.link"
                    className="rounded px-4 py-2"
                    onChange={(e) => setInputUrl(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="rounded border border-white bg-white/10 px-4 py-2 font-bold text-white"
                    disabled={loading}
                  >
                    Coba sekarang
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-lg px-4 py-16">
        <h2 className="text-center text-3xl font-bold">Features</h2>
        <div className="mt-10 space-y-8 md:flex md:space-y-0 md:space-x-8">
          <div className="text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-blue-100 text-4xl leading-[96px]">
              &#x1F517;
            </div>
            <h3 className="mt-2 text-lg font-semibold">Kustom url</h3>
            <p className="text-slate-500">
              Gak perlu pusing mengingat tautan sepanjang rel kereta, url pendek
              nan mudah diingat milikmu sekarang
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-orange-200 text-4xl leading-[96px]">
              &#x1F680;
            </div>
            <h3 className="mt-2 text-lg font-semibold">Bagikan</h3>
            <p className="text-slate-500">
              Bagikan tautan ke manapun kamu mau, tautan pendek yang cantik
              dipandang
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-green-200 text-4xl leading-[96px]">
              &#x1F4C8;
            </div>
            <h3 className="mt-2 text-lg font-semibold">Pantau Statistik</h3>
            <p className="text-slate-500">
              Lihat berapa banyak orang yang mengunjungi tautan yang kamu buat,
              kami tahu apa yang anda pikirkan
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-lg px-4 pt-16 pb-32">
        <h2 className="text-center text-3xl font-bold">Special Thanks</h2>
        <p className="mt-2 text-center">
          Bukan sponsor, tapi tanpa mereka situs ini tidak bisa kamu nikmati :)
        </p>
        <div className="mx-auto mt-10 grid max-w-[700px] grid-cols-2 gap-6 md:grid-cols-3">
          <div className="flex items-center justify-center">
            <Image src="/vercel.svg" width={252} height={33} alt="" />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/idcloudhost.png"
              width={252}
              height={50}
              alt="idcloudhost"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image src="/supabase.png" width={252} height={56} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-zinc-300">
        <div className="mx-auto max-w-screen-lg px-4 pt-6">
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="mt-3 grid max-w-[500px] grid-cols-2">
            <li>Home</li>
            <li>Help</li>
            <li>Privacy Policy</li>
            <li>About</li>
            <li>Terms of Service</li>
            <li>Report</li>
          </ul>
          <div className="mt-6 flex justify-between border-t border-zinc-400/50 py-2">
            <p>sev.my.id &copy; {new Date().getFullYear()}</p>
            <p>Made with &lt;3 and a cup of coffee</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
