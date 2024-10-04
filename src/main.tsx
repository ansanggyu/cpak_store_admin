import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import adminRouter from "./routers/adminRouter.tsx";
import {RecoilRoot} from "recoil";

createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
        <RouterProvider router={adminRouter}></RouterProvider>
    </RecoilRoot>
)
