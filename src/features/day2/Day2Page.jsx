import SearchableCardList from "../day1/components/SearchableCardList";
import SearchBox from "../day1/components/SearchBox";
import { students } from "../day1/data";
import { useState } from "react";
import DropDownSelection from "./components/DropDownSelection";

function getAllBranches() {
  let branches = new Set();
  for (let student of students) {
    branches.add(student.branch);
  }
  return branches;
}

function getAllYears() {
  let years = new Set();
  for (let student of students) {
    years.add(student.year);
  }
  return years;
}

// static data
const allBranches = getAllBranches();
const allYears = getAllYears();

export default function Day2Page() {
  const [query, setQuery] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");

  // handelers.
  function handleChange(text) {
    setQuery(text);
  }

  function handleBranchChange(newBranch) {
    setBranch(newBranch);
  }

  function handleYearChange(newYear) {
    setYear(newYear);
  }

  // Filtering student data baseed on the search query parameter Any casee Matched..
  let filterStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(query.trim().toLowerCase()) ||
      student.roll.toLowerCase().includes(query.trim().toLowerCase())
    );
  });

  // filter 2nd stage based on the branch and year
  filterStudents = filterStudents.filter((student) => {
    if (year.length && branch.length) {
      return student.branch === branch && student.year === year;
    } else if (year.length && !branch) {
      return student.year === year;
    } else if (branch.length && !year) {
      return student.branch === branch;
    } else {
      return student;
    }
  });

  return (
    <>
      <div className="flex flex-col w-screen h-screen  p-8 gap-16 scroll-auto">
        <h1 className="text-4xl font-bold text-center">Searchable Card List</h1>
        <SearchBox
          query={query}
          placeholder={"Enter Name Or Roll Number to Search Student.."}
          onChange={handleChange}
        >
        <div className="flex gap-4">

          <DropDownSelection
            onChange={handleBranchChange}
            data={allBranches}
            value={branch}
            name={"branch"}
            />
          <DropDownSelection
            onChange={handleYearChange}
            data={allYears}
            value={year}
            name={"year"}
            />
            </div>
          <button
            className="flex justify-center items-center border-2 border-teal-300 px-4 py-2  rounded-2xl hover:bg-teal-200 cursor-pointer text-xl font-semibold"
            onClick={() => {
              handleChange("");
              handleBranchChange("");
              handleYearChange("");
            }}
          >
            Reset
          </button>
        </SearchBox>
        <div className="flex flex-col p-4 rounded-lg gap-4 border-2 border-teal-200 ">
          <SearchableCardList cards={filterStudents} />
        </div>
      </div>
    </>
  );
}
