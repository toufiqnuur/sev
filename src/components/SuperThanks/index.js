import Container from "../Container";
import DisplayItem from "./DisplayItem";

export default function SuperThanks() {
  return (
    <Container className="pt-16 pb-32">
      <h2 className="text-center text-3xl font-bold">Special Thanks</h2>
      <p className="mt-2 text-center">
        Bukan sponsor, tapi tanpa mereka situs ini tidak bisa kamu nikmati :)
      </p>
      <div className="mx-auto mt-10 grid max-w-[700px] grid-cols-2 gap-6 md:grid-cols-3">
        <DisplayItem
          src="/idcloudhost.png"
          width={252}
          height={50}
          name="Idcloudhost"
        />
        <DisplayItem
          src="/supabase.png"
          width={252}
          height={56}
          name="Supabase"
        />
        <DisplayItem src="/vercel.svg" width={252} height={33} name="Vercel" />
      </div>
    </Container>
  );
}
