
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ControlPanel from "./pages/ControlPanel";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register"

const Layout = () => {
  return (
     <div className='app'>
        <Navbar />
        <Outlet />
        <Footer />
     </div>
  )
}

const LayoutCMS = () => {
  return (
     <div className='app'>
        <Sidebar />
        <Outlet />
     </div>
  )
}

const router = createBrowserRouter([
  {
     path: '/',
     element: <Layout />,
     children: [
        {
           path: '/',
           element: <Home />,
        },
        {
         path: '/login',
         element: <Login />,
      },{
         path: '/register',
         element: <Register />
      }
     ],
  },
  {
    path: '/c-panel',
    element: <LayoutCMS />,
    children: [
       {
          path: '/c-panel',
          element: <ControlPanel />,
       },
    ],
 },
])

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
