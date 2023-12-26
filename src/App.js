import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";  //New enhancement in react-dom package
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import AboutUsComponent from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
//Create the following html using React.createElement
{/* <div id="parent">
    <div id="class">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */}
// ReactElement Object => Browser Understands

// create Element is core react function
// const parent = React.createElement("div",{id:"parent"},
//                    React.createElement("div",{id:"child"},
//                    [
//                        React.createElement("h1",{},"I am h1 tag"),
//                        React.createElement("h2",{},"I am h2 tag")
//                    ])
//                 )
       
// Here we are using ReactDOM as we have to render data 
// We are creating root inside react i.e. REACT IS ONLY WORKING INSIDE DIV ID ROOT
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// If the root already contains any html then root.render command will replace that html with 'parent' element
// that we have created above.
// Any element written above and below 'root' will not be affected by root.render
const Grocery = lazy(() => import("./components/Grocery"));
const App = () => {
    return(
        <div className="app">
             <Header/>
             <Outlet/>
        </div>
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

