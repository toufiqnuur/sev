import { supabase } from "../utils/supabase";

export default function RedirectPage() {
  return <></>;
}

export async function getServerSideProps({ params }) {
  const { data } = await supabase
    .from("urls")
    .select()
    .eq("slug", params.slug)
    .single();

  if (data) {
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
