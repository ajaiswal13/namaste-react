import React,{lazy,Suspense,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";  //New enhancement in react-dom package
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import AboutUsComponent from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
    const [username, setUserName] = useState();
    useEffect(() => {
    //Authentication logic to fetch the data
       const data = {
        name: "Aishwarya Jaiswal"
       }
       setUserName(data.name);
    },[])
    return (
       <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:username,setUserName}}>
              <div className="app">
               <Header/>
               <Outlet/>
              </div>
            </UserContext.Provider>
       </Provider>
    );
}
const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'/',
                element: <Body/>
            },
            {
                path:'/about',
                element: <AboutUsComponent/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/restaurants/:id',
                element: <RestaurantMenu/>
            },
            {
                path:'/cart',
                element: <Cart/>
            },
            {
                path:'/grocery',
                element: (
                    <Suspense fallback={<Shimmer/>}>
                         <Grocery/>
                    </Suspense>
                )
            }
        ],
        errorElement: <Error/>
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

