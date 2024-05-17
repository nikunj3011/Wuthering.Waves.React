import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import HomeLayout02 from "../Layouts/HomeLayout02";
import HomeLayout03 from "../Layouts/HomeLayout03";
import HomeLayout04 from "../Layouts/HomeLayout04";
import ShopLayout from "../Layouts/ShopLayout";
import AboutUs from "../Pages/AboutUs";
import Blog from "../Pages/BlogPages/Blog";
import BlogDetails from "../Pages/BlogPages/BlogDetails";
import CommingSoon from "../Pages/CommingSoon";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage";
import Home01 from "../Pages/HomePages/Home01";
import Home02 from "../Pages/HomePages/Home02";
import Home03 from "../Pages/HomePages/Home03";
import Home04 from "../Pages/HomePages/Home04";
import Home05 from "../Pages/HomePages/Home05";
import Home06 from "../Pages/HomePages/Home06";
import Home07 from "../Pages/HomePages/Home07";
import Home08 from "../Pages/HomePages/Home08";
import Home09 from "../Pages/HomePages/Home09";
import Home10 from "../Pages/HomePages/Home10";
import Login from "../Pages/Login";
import Project01 from "../Pages/ProjectPages/Project01";
import Project02 from "../Pages/ProjectPages/Project02";
import Project03 from "../Pages/ProjectPages/Project03";
import ProjectDetails from "../Pages/ProjectPages/ProjectDetails";
import ProjectDetails02 from "../Pages/ProjectPages/ProjectDetails02";
import Service01 from "../Pages/ServicePages/Service01";
import Service02 from "../Pages/ServicePages/Service02";
import ServiceDetails from "../Pages/ServicePages/ServiceDetails";
import Shop01 from "../Pages/ShopPages/Shop01";
import Shop02 from "../Pages/ShopPages/Shop02";
import Shop03 from "../Pages/ShopPages/Shop03";
import ShopCart from "../Pages/ShopPages/ShopCart";
import ShopCheckout from "../Pages/ShopPages/ShopCheckout";
import ShopProduct from "../Pages/ShopPages/ShopProduct";
import Team from "../Pages/TeamPages/Team";
import TeamDetails from "../Pages/TeamPages/TeamDetails";
import ThankYou from "../Pages/ThankYou";
import { productsAndCartData } from "../components/forJSON/getCart&ProductsData";

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
                path: '/home-3',
                element: <Home03/>,
            },
            {
                path: '/home-4',
                element: <Home04/>,
            },
            {
                path: '/home-5',
                element: <Home05/>,
            },
            {
                path: '/home-6',
                element: <Home06/>,
            },
            {
                path: '/home-8',
                element: <Home08/>,
            },
            {
                path: '/home-9',
                element: <Home09/>,
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
                path: '/about',
                element: <AboutUs/>,
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
    },
    {
        path: "/",
        element: <HomeLayout02/>,
        children: [
            {
                path: '/home-2',
                element: <Home02/>,
            },

        ]
    },
    {
        path: "/",
        element: <HomeLayout03/>,
        children: [
            {
                path: '/home-7',
                element: <Home07/>,
            },

        ]
    },
    {
        path: "/",
        element: <HomeLayout04/>,
        children: [
            {
                path: '/home-10',
                element: <Home10/>,
            },

        ]
    },
    {
        path: "/",
        loader: productsAndCartData,
        element: <ShopLayout/>,
        children: [
            {
                path: '/shop-1',
                element: <Shop01/>,
            },
            {
                path: '/shop-2',
                element: <Shop02/>,
            },
            {
                path: '/shop-3',
                element: <Shop03/>,
            },
            {
                path: '/product-details',
                element: <ShopProduct/>,
            },
            {
                path: '/shop-cart',
                element: <ShopCart/>,
            },
            {
                path: '/shop-checkout',
                element: <ShopCheckout/>,
            },
            // {
            //     path: '/shop-product/:id',
            //     element: <SelectedProduct/>,
            //     loader: ({ params }) => fetch(`https://mrittik-server.vercel.app/products/${params.id}`)
            // },
            // {
            //     path: '/shop-category/:id',
            //     element: <ShopCategory/>,
            //     loader: ({ params }) => fetch(`https://mrittik-server.vercel.app/products/category/${params.id}`),
            // },

        ]
    }
])