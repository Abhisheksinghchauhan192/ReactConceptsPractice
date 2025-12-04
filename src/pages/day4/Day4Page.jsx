import { foods } from "./fooddata";
import Card from "./Card";
import RecomendedCard from "./RecomendedCard";

// Card with some extra details
const WithRecomendedCard = RecomendedCard(Card);

function CardWrapper({ children }) {
  return (
    <div className="flex gap-6 bg-linear-to-br from-blue-700 via-indigo-700 to-indigo-800 p-4 flex-wrap justify-center items-center w-80 m-8 rounded-2xl shadow-2xl hover:shadow-xl shadow-black  transition delay-50 hover:translate-y-4 ring-2 ring-emerald-300 ">
      {children}
    </div>
  );
}

export default function Day4Page() {
  const CardElements = foods.map((food) => {
    if (food.rating >= 4) {
      return (
        <CardWrapper key={food.id}>
          <WithRecomendedCard {...food} />
        </CardWrapper>
      );
    } else {
      return (
        <CardWrapper key={food.id}>
          <Card key={food.id} {...food} />
        </CardWrapper>
      );
    }
  });

  return (
    <>
      <div className=" flex  flex-col bg-linear-to-br from-indigo-950 via-indigo-800 to-blue-950">
        <header>
          <h1 className="text-4xl text-amber-200 font-bold  text-center mt-4 ">Food Menu</h1>
        </header>
        <div className="flex  justify-center w-screen   gap-4 flex-wrap ">
          {CardElements}
        </div>
      </div>
    </>
  );
}
