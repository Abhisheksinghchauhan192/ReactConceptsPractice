export default function Avatar({ img }) {
  return (
    <div className="flex justify-center items-center">
       <div className="w-24 h-24 rounded-full bg-emerald-300 p-1 flex justify-center items-center">
        <div className="w-22 h-22 rounded-full bg-pink-300 flex justify-center items-center">
          <h2 className="text-2xl font-bold">{img}</h2>
        </div>
      </div>
    </div>
  );
}
