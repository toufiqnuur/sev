import Container from "../Container";
import Item from "./Item";

export default function Features() {
  return (
    <Container className="py-16">
      <h2 className="text-center text-3xl font-bold">Features</h2>
      <div className="mt-10 space-y-8 md:flex md:space-y-0 md:space-x-8">
        <Item
          icon={<span>&#x1F517;</span>}
          title="Kustom Link"
          description="Gak perlu pusing mengingat tautan sepanjang rel kereta, url pendek
              nan mudah diingat milikmu sekarang"
        />
        <Item
          icon={<span>&#x23F1;</span>}
          title="Time based Link"
          description="Atur berapa lama link dapat diakses, teratur itu baik"
        />
        <Item
          icon={<span>&#x1F4C8;</span>}
          title="Pantau Statistik"
          description="Lihat berapa banyak orang yang mengunjungi tautan yang kamu buat,
              kami tahu apa yang anda pikirkan"
        />
      </div>
    </Container>
  );
}
