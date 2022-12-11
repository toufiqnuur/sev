import Image from "next/image";

export default function DisplayItem({ src, width, height, name }) {
  return (
    <div className="flex items-center justify-center">
      <Image src={src} width={width} height={height} alt={name} />
    </div>
  );
}
