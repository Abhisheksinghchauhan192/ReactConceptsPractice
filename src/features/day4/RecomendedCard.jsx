export default function RecomendedCard(Card) {
  return (props) => {
    return (
      <>
        <div className="flex justify-end w-full">
          <span className="p-2 rounded-2xl bg-red-300 text-md font-bold text-black">Top Rated ✨ </span>
        </div>
        <Card {...props} />
      </>
    );
  };
}
