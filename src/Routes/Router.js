import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home01 from "../Pages/HomePages/Home01";
import Characters from "../Pages/ProjectPages/Characters";
import Echoes from "../Pages/ProjectPages/Echoes";
import Weapons from "../Pages/ProjectPages/Weapons";
import GearSets from "../Pages/ProjectPages/GearSets";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                path: '/',
                element: <Home01/>,
            },
            {
                path: '/characters',
                element: <Characters/>,
            },
            {
                path: '/echoes',
                element: <Echoes/>,
            },
            {
                path: '/weapons',
                element: <Weapons/>,
            },
            {
                path: '/gearsets',
                element: <GearSets/>,
            },
        ]
    }
])