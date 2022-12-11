export default function Item({ icon, title, description }) {
  return (
    <div className="flex-1 text-center">
      <div className="mx-auto h-24 w-24 rounded-full bg-indigo-200 text-4xl leading-[96px]">
        {icon}
      </div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-slate-500">{description}</p>
    </div>
  );
}
