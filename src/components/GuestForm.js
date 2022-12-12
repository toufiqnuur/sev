import Container from "./Container";
import { IoMdClose, IoMdColorWand, IoMdCopy } from "react-icons/io";
import { useState } from "react";
import { insertUrlGuestMode } from "../utils/supabase";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

export default function GuestForm() {
  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await insertUrlGuestMode(inputUrl);
    if (error) {
      toast.error(error.message);
    } else {
      setInputUrl(`sev.my.id/${data.slug}`);
      setShortUrl(`sev.my.id/${data.slug}`);
      setLoading(false);
    }
  };

  const copyUrl = () => {
    copy(shortUrl);
    toast.success("Copied to clipboard");
  };

  const clearForm = () => {
    setShortUrl("");
    setInputUrl("");
  };

  return (
    <Container
      className="relative mt-16 bg-blue-500 py-16 md:rounded-xl"
      id="form-trial"
    >
      <h4 className="text-2xl font-bold text-white md:text-center lg:text-4xl">
        Masih ragu?
      </h4>
      <p className="text-white/70 md:text-center">
        Nikmati fitur trial tanpa perlu login.
      </p>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-md space-x-4">
          <input
            className="form-input flex-1 cursor-text rounded-lg"
            type="url"
            value={inputUrl}
            disabled={!!shortUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="https://your.very-long.url"
            required
          />
          {!!shortUrl ? (
            <>
              <button
                type="button"
                onClick={copyUrl}
                className="flex cursor-pointer items-center justify-center space-x-3 rounded-lg border border-white/70 bg-white/20 px-4 py-2 font-bold text-white hover:text-zinc-300 focus:ring-2 focus:ring-white/50"
              >
                <IoMdCopy /> <span className="hidden md:block">Copy</span>
              </button>
              <button
                type="button"
                onClick={clearForm}
                className="flex cursor-pointer items-center justify-center space-x-3 rounded-lg border border-white/70 bg-white/20 px-4 py-2 font-bold text-white hover:text-zinc-300 focus:ring-2 focus:ring-white/50"
              >
                <IoMdClose /> <span className="hidden md:block">Clear</span>
              </button>
            </>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="flex cursor-pointer items-center justify-center space-x-3 rounded-lg border border-white/70 bg-white/20 px-4 py-2 font-bold text-white hover:text-zinc-300 focus:ring-2 focus:ring-white/50"
            >
              <IoMdColorWand />{" "}
              <span className="hidden md:block">Generate</span>
            </button>
          )}
        </div>
      </form>
    </Container>
  );
}
