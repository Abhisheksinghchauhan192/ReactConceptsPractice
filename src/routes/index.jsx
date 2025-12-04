import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../pages/dashboard/DashBoard";
import Day1Page from '../pages/day1/Day1Page';
import Day2Page from "../pages/day2/Day2Page";
import Day3Page from "../pages/day3/Day3Page";
import Day4Page from '../pages/day4/Day4Page';
import AddProject from "../pages/addProject/AddProject";

const routes = [

    {
        path:'/',
        element:<DashBoard/>, 
    },
    {
        path:'/addProject',
        element:<AddProject/>
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
    },
    {
        path:'day4',
        element:<Day4Page/>
    },

]

export const router = createBrowserRouter(routes)