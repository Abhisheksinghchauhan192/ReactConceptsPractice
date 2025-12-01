import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../pages/dashboard/DashBoard";
import Day1Page from '../pages/day1/Day1Page';
import Day2Page from "../pages/day2/Day2Page";

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
    }

]


export const router = createBrowserRouter(routes)