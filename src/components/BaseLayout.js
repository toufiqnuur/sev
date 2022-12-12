import Footer from "./Footer";
import Header from "./Header";

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
