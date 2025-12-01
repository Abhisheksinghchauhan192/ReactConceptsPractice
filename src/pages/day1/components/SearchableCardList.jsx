import Avatar from '../../../components/Avatar'
export default function SearchableCardList({cards}){

    const cardsElements = cards.map(card=>{

        return (

            <div 
            key={card.roll}
            className='flex flex-col p-4 rounded-lg gap-4 border-2 border-indigo-400 max-w-70'>
                <div className='flex justify-center'>
                <Avatar  img={card.name[0]}></Avatar>
                </div>
                <h3 className='text-2xl font-bold '>{card.name}</h3>
                <div className='flex gap-4 font-semibold'>
                    <p> Roll: {card.roll}</p>
                    <p>Branch: {card.branch}</p>
                    <p>Year: {card.year}</p>
                </div>
                <p className='text-md font-semibold'>Email: {card.email}</p>
                <p className='italic font-semibold'>{card.remarks}</p>
            </div>
        )
    })

    return(
        <div className='flex flex-wrap gap-4 '>
            {cardsElements}
        </div>
    )
}