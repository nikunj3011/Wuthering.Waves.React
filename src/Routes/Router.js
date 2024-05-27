import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Blog from "../Pages/BlogPages/Blog";
import BlogDetails from "../Pages/BlogPages/BlogDetails";
import CommingSoon from "../Pages/CommingSoon";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage";
import Home01 from "../Pages/HomePages/Home01";
import Login from "../Pages/Login";
import Project01 from "../Pages/ProjectPages/Project01";
import Project02 from "../Pages/ProjectPages/Project02";
import Project03 from "../Pages/ProjectPages/Project03";
import ProjectDetails from "../Pages/ProjectPages/ProjectDetails";
import ProjectDetails02 from "../Pages/ProjectPages/ProjectDetails02";
import Service01 from "../Pages/ServicePages/Service01";
import Service02 from "../Pages/ServicePages/Service02";
import ServiceDetails from "../Pages/ServicePages/ServiceDetails";
import Team from "../Pages/TeamPages/Team";
import TeamDetails from "../Pages/TeamPages/TeamDetails";
import ThankYou from "../Pages/ThankYou";
import { productsAndCartData } from "../components/forJSON/getCart&ProductsData";
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
            {
                path: '/project-1',
                element: <Project01/>,
            },
            {
                path: '/project-2',
                element: <Project02/>,
            },
            {
                path: '/project-3',
                element: <Project03/>,
            },
            {
                path: '/project-details',
                element: <ProjectDetails/>,
            },
            {
                path: '/project-details-2',
                element: <ProjectDetails02/>,
            },
            {
                path: '/service-1',
                element: <Service01/>,
            },
            {
                path: '/service-2',
                element: <Service02/>,
            },
            {
                path: '/service-details',
                element: <ServiceDetails/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/coming-soon',
                element: <CommingSoon/>,
            },
            {
                path: '/thank-you',
                element: <ThankYou/>,
            },
            {
                path: '/team',
                element: <Team/>,
            },
            {
                path: '/team-details',
                element: <TeamDetails/>,
            },
            {
                path: '/contact',
                element: <Contact/>,
            },
            {
                path: '/blog',
                element: <Blog/>,
            },
            {
                path: '/blog-details',
                element: <BlogDetails/>,
            },
            {
                path: '*',
                element: <ErrorPage/>,
            },

        ]
    }
])