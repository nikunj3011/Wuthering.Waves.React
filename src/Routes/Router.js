import { createHashRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/HomePages/Home";
import Characters from "../Pages/ProjectPages/Characters";
import Echoes from "../Pages/ProjectPages/Echoes";
import Weapons from "../Pages/ProjectPages/Weapons";
import GearSets from "../Pages/ProjectPages/GearSets";

export const routes = createHashRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
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