import {createBrowserRouter, Navigate} from "react-router-dom";
import {lazy, Suspense} from "react";

import LoadingPage from "../pages/LoadingPage.tsx";
import adminProductRouter from "./adminProductRouter.tsx";
import memberRouter from "./memberRouter.tsx";

const AdminMainPage = lazy(() => import("../pages/AdminMainPage.tsx"))
const AdminLoginPage = lazy(() => import("../pages/AdminLoginPage.tsx"))

export const Loading = <LoadingPage></LoadingPage>

const adminRouter = createBrowserRouter([
    {
        path: "",
        element: <Navigate to='login' replace={true}></Navigate>
    },
    {
        path: "/main",
        element: <Suspense fallback={Loading}><AdminMainPage/></Suspense> ,
    },
    {
        path: "/login",
        element: <Suspense fallback={Loading}><AdminLoginPage/></Suspense> ,
    },
    adminProductRouter,
    memberRouter
])

export default adminRouter