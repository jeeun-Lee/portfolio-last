import { createBrowserRouter } from 'react-router-dom'; 
import NotFound from '../pages/NotFound';
import App from '../App';
import Home from '../pages/Home';
import ErrorComponents from '../components/ErrorComponents';


const router = createBrowserRouter([
    {
        path :"/",
        element : <App />,
        children : [
            {
                path : "",
                element : <Home />,
                errorElement : <ErrorComponents />
            }
        ],
        errorElement : <NotFound />
    },
    
])
export default router;