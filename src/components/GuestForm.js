import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import { insertUrlGuestMode } from "../utils/supabase";
import Container from "./Container";

const Button = ({ type, onClick, children, attrs }) => (
  <button
    {...attrs}
    type={type}
    onClick={onClick}
    className="easy-in-out mt-4 w-full rounded-2xl bg-blue-400 px-4 py-2 text-lg font-medium text-white shadow-lg shadow-blue-700 transition delay-100 duration-300 hover:-translate-y-1 md:px-6 md:py-3 md:text-xl"
  >
    {children}
  </button>
);

export default function GuestForm({ onSubmit, onCopy }) {
  const [history, setHistory] = useState([]);
  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.sevHash) setHistory(JSON.parse(localStorage.sevHash));
  }, []);

  useEffect(() => {
    if (shortUrl) localStorage.sevHash = JSON.stringify(history);
  }, [shortUrl, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await insertUrlGuestMode(inputUrl);
    if (error) {
      toast.error(error.message);
    } else {
      setShortUrl(`sev.my.id/${data.slug}`);
      setHistory([
        {
          longUrl: inputUrl,
          shortUrl: `sev.my.id/${data.slug}`,
          timestamp: +new Date(),
        },
        ...history,
      ]);
      setInputUrl(`sev.my.id/${data.slug}`);
      setLoading(false);
    }
  };

  const copyUrl = (url) => {
    copy(url);
    toast.success("Copied to clipboard");
  };

  const clearForm = () => {
    setShortUrl("");
    setInputUrl("");
  };

  return (
    <div className="bg-blue-700/90">
      <Container className="mt-24 py-24" id="trial-section">
        <h3 className="px-12 text-center text-3xl font-semibold text-white md:px-48 md:text-5xl">
          No need to login, try it now!
        </h3>
        <p className="mt-4 text-center text-lg text-white/70 md:text-xl">
          Without login shorten link will be automatically deleted within a
          week.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-md lg:max-w-3xl"
        >
          <input
            type="url"
            disabled={!!shortUrl}
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Shorten your link"
            className="form-input w-full rounded-2xl py-2 text-lg md:py-3 md:px-6 md:text-xl"
            required
          />
          {shortUrl ? (
            <div className="flex space-x-4">
              <Button type="button" onClick={() => copyUrl(shortUrl)}>
                Copy to Clipborad
              </Button>
              <Button type="button" onClick={clearForm}>
                Clear Form
              </Button>
            </div>
          ) : (
            <Button type="submit" disabled={loading} onClick={handleSubmit}>
              Shorten
            </Button>
          )}
        </form>

        {!!history.length && (
          <div className="divide-y-white mx-auto mt-6 max-w-md divide-y rounded-xl border border-white bg-white/75 text-lg md:text-xl lg:max-w-3xl">
            {history.map((item, index) => (
              <div key={index} className="grid items-center p-4 lg:grid-cols-2">
                <div>{item.longUrl}</div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600">{item.shortUrl}</span>
                  <button
                    onClick={() => copyUrl(item.shortUrl)}
                    className="easy-in-out rounded-2xl bg-blue-600 px-4 py-2 font-medium text-white shadow-lg shadow-blue-700/50 transition delay-100 duration-300 hover:-translate-y-1 md:px-4 md:py-2 md:text-lg"
                  >
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
