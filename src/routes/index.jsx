import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../pages/dashboard/DashBoard";
import Day1Page from '../pages/day1/Day1Page';
import Day2Page from "../pages/day2/Day2Page";
import Day3Page from "../pages/day3/Day3Page";

const routes = [

    {
        path:'/',
        element:<DashBoard/>, 
    },
    {
        path:'day1',
        element:<Day1Page/>
    },
    {
        path:'day2',
        element:<Day2Page/>
    },
    {
        path:'day3',
        element:<Day3Page/>
    }
]

export const router = createBrowserRouter(routes)