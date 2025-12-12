import Card from './Card'
export default function SearchableCardList({cards}){

    if(cards.length===0){

        return (
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-6xl font-bold text-red-500 '>No Data Found For Your Search</h1>
                <p className='text-xl font-semibold italic '>Try Searching with Student Name or by Roll. Number </p>
            </div>
        )
    }

    const cardsElements = cards.map(card=>{

        return <Card 
        key={card.roll}
        card={card}
        />
    })

    return(
        <div className='flex flex-wrap gap-4 '>
            {cardsElements}
        </div>
    )
}