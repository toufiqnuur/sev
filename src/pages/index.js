import copy from "copy-to-clipboard";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Features from "../components/Features";
import SuperThanks from "../components/SuperThanks";
import Footer from "../components/Footer";
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
      setResultUrl(`sev.my.id/${data.slug}`);
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
                    placeholder="https://your-very-very-long.link"
                    className="w-full max-w-md rounded px-4 py-2"
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

      <Features />
      <SuperThanks />
      <Footer />
      <ToastContainer />
    </div>
  );
}
