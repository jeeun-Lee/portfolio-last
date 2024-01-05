import { createBrowserRouter } from 'react-router-dom'; 
import NotFound from '../pages/NotFound';
import App from '../App';
import Home from '../pages/Home';
import Project2 from '../pages/Project2';
import ErrorComponents from '../components/ErrorComponents';
const router = createBrowserRouter([
    {
        path :"/portfolio-last",
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