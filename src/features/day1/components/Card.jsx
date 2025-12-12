import Avatar from "../../../components/Avatar";
export default function Card({ card }) {
  const fullName = card.name;
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0];
  let lastName = "";
  if (nameParts.length > 1) {
    lastName = nameParts[1];
  }

  return (
    <div className="flex flex-col p-4 rounded-lg gap-4 border-2 border-indigo-400 max-w-70">
      <div className="flex justify-center">
        <Avatar
          img={`${firstName.charAt(0).toUpperCase()}${lastName
            .charAt(0)
            .toUpperCase()}`}
        ></Avatar>
      </div>
      <h3 className="text-2xl font-bold ">{card.name}</h3>
      <div className="flex gap-4 font-semibold">
        <p> Roll: {card.roll}</p>
        <p>Branch: {card.branch}</p>
        <p>Year: {card.year}</p>
      </div>
      <p className="text-md font-semibold">Email: {card.email}</p>
      <p className="italic font-semibold">{card.remarks}</p>
    </div>
  );
}
