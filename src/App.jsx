import './App.css'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/Footer'
import Home from './pages/home/Home'
import Add from './pages/add/Add'
import Gig from './pages/gig/Gig'
import Gigs from './pages/gigs/Gigs'
import Message from './pages/message/Message'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Orders from './pages/Orders/Orders'

function App() {

  const Layout = ()=>{
    return(
      <div className="app">
        <Navbar />
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/gigs',
        element: <Gigs/>
      },
      {
        path:'/gig/:id',
        element: <Gig/>
      },
      {
        path:'/add',
        element: <Add/>
      },
      {
        path:'/orders',
        element: <Orders/>
      },    
      {
        path:'/Message/:id',
        element: <Message/>
      },
      
    ]
  },
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
