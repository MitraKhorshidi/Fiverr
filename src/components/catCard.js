export default function CatCard({ item }) {
  return (
    <div
     style={{backgroundImage: `url(${item.img})` }}
      className="flex w-60 h-80 bg-cover relative text-white shadow-sm rounded-md cursor-pointer">
      <div className="flex flex-col justify-start gap-y-2 p-4">
        <p>{item.desc}</p>
        <h2 className="font-semibold text-lg">{item.title}</h2>
      </div>
    </div>
  );
}
