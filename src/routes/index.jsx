import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../features/dashboard/DashBoard";
import Day1Page from "../features/day1/Day1Page";
import Day2Page from "../features/day2/Day2Page";
import Day3Page from "../features/day3/Day3Page";
import Day4Page from "../features/day4/Day4Page";
import AddProject from "../features/addProject/AddProject";
import Day5Page from "../features/day5/Day5Page";
import Day6Page from "../features/day6/Day6Page";
import Day7Page from "../features/day7/Day7Page";
import Day8Routes from "../features/day8/routes";
import Day9Routes from "../features/day9/routes";
import Day10Routes from "../features/day10/routes";
import StopwatchRoutes from "../features/day11/routes";

const routes = [
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "addProject",
    element: <AddProject />,
  },
  {
    path: "day1",
    element: <Day1Page />,
  },
  {
    path: "day2",
    element: <Day2Page />,
  },
  {
    path: "day3",
    element: <Day3Page />,
  },
  {
    path: "day4",
    element: <Day4Page />,
  },
  {
    path: "day5",
    element: <Day5Page />,
  },
  { 
    path: "day6", 
    element: <Day6Page />,
 },
 {
  path:'day7',
  element:<Day7Page/>,
 },
 Day8Routes,
 Day9Routes,
 Day10Routes,
 StopwatchRoutes,
];

export const router = createBrowserRouter(routes);
