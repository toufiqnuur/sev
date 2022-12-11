import dayjs from "dayjs";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { supabase } from "../utils/supabase";

export default function RedirectPage(props) {
  return (
    <>
      <Container className="py-40 text-center">
        <h2 className="text-4xl font-bold">403 Forbidden</h2>
        <p className="mt-4 text-lg">
          {props?.url?.isExpired &&
            "Tautan sudah kadaluwarsa hubungi pemilik jika ada kesalahan"}
        </p>
      </Container>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { data } = await supabase
    .from("urls")
    .select()
    .eq("slug", params.id)
    .single();

  if (data) {
    const isExpired = dayjs(data.expired_at).valueOf() < dayjs().valueOf();

    if (isExpired) {
      return {
        props: {
          url: {
            isExpired: true,
            expired_at: data.expired_at,
          },
        },
      };
    }

    return {
      notFound: false,
      redirect: {
        destination: data.real_url,
        permanent: true,
      },
    };
  }

  return {
    notFound: true,
    props: {},
  };
}
