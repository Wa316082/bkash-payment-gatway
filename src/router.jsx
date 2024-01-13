import { createBrowserRouter } from "react-router-dom";
import BkashPayment from "./payment/BkashPayment";
import NotFound from "./NotFound";
import Error from "./payment/Error";
import Success from "./payment/Success";


// const id=useLocation()
// console.log(id)

const router = createBrowserRouter([
    {
        path: '/',
        element: <BkashPayment />,
    },

    {
        path: '/error',
        element: <Error />
    },
    {
        path: '/success',
        element: <Success />
    },

    {
        path: '*',
        element: <NotFound />
    }

])

export default router;
