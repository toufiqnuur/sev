import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.min.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
