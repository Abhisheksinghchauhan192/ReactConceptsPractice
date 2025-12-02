import SearchableCardList from "./components/SearchableCardList";
import SearchBox from "./components/SearchBox";
import { students } from "./data";
import { useState } from "react";

export default function Day1Page(){

    const [query,setQuery] = useState('')
    
    function handleChange(text){
        setQuery(text)
    }

    // Filtering student data baseed on the search query parameter Any casee Matched..
    const filterStudents = students.filter(student=>{
        return student.name.toLowerCase().includes(query.trim().toLowerCase()) || student.roll.toLowerCase().includes(query.trim().toLowerCase())
    });

    return (
        <>
        <div className="flex flex-col w-screen h-screen  p-8 gap-16 scroll-auto">
            <h1 className="text-4xl font-bold text-center">Searchable Card List</h1>
            <SearchBox query={query} 
            placeholder={"Enter Name Or Roll Number to Search Student.."}
            onChange={handleChange}
            />
            <div className="flex flex-col p-4 rounded-lg gap-4 border-2 border-teal-200 ">
            <SearchableCardList cards={filterStudents}/>
            </div>
        </div>
        </>
    )
}