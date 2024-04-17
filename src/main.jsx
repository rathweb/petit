// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import 'swiper/css';

// // bootstrap css
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';


// // fonts and icons
// // import '././assets/css/icofont.min.css';
// // import '././assets/css/animate.css';
// // import '././assets/css/style.min.css';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   } from "react-router-dom";
// import Home from './pages/Home.jsx';
// import Services from './pages/Services.jsx';
// import AboutUs from "./pages/AboutUs.jsx";
// import Birds from "./pages/Birds.jsx";
// import Cats from "./pages/Cats.jsx";
// import ContactUs from "./pages/ContactUs.jsx";
// import Dogs from "./pages/Dogs.jsx";
// import Fish from "./pages/Fish.jsx";
// import HairSalon from "./pages/HairSalon.jsx";
// import DeliveryService from "./pages/DeliveryService.jsx";
// import Reptiles from "./pages/Reptiles.jsx";
// import Rodents from "./pages/Rodents.jsx";
// import Shop from "./pages/Shop.jsx";
// import SignUp from "./pages/SignUp.jsx";
// import LogIn from "./pages/LogIn.jsx";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children: [
//       {path:"/", element: <Home/>},
//       {path:'/tienda',element:<Shop/>},
//       {path:'/tienda/perros',element:<Dogs/>},
//       {path:'/tienda/gatos',element:<Cats/>},
//       {path:'/tienda/peces',element:<Fish/>},
//       {path:'/tienda/aves',element:<Birds/>},
//       {path:'/tienda/roedores',element:<Rodents/>},
//       {path:'/tienda/reptiles',element:<Reptiles/>},
//       {path:"/servicios", element: <Services/>},
//       {path:"/servicios/servicio-a-domicilio", element: <DeliveryService/>},
//       {path:"/servicios/peluqueria", element: <HairSalon/>},
//       {path:"/nosotros", element: <AboutUs/>},
//       {path:"/contacto", element: <ContactUs/>},
//       {path:"/signup", element: <SignUp/>},
//       {path:"/login", element: <LogIn/>},

//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router}/>
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Birds from './pages/Birds.jsx';
import Cats from './pages/Cats.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Dogs from './pages/Dogs.jsx';
import Fish from './pages/Fish.jsx';
import HairSalon from './pages/HairSalon.jsx';
import DeliveryService from './pages/DeliveryService.jsx';
import Reptiles from './pages/Reptiles.jsx';
import Rodents from './pages/Rodents.jsx';
import Shop from './pages/Shop.jsx';
import SignUp from './pages/SignUp.jsx';
import LogIn from './pages/LogIn.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/tienda', element: <Shop /> },
      { path: '/tienda/perros', element: <Dogs /> },
      { path: '/tienda/gatos', element: <Cats /> },
      { path: '/tienda/peces', element: <Fish /> },
      { path: '/tienda/aves', element: <Birds /> },
      { path: '/tienda/roedores', element: <Rodents /> },
      { path: '/tienda/reptiles', element: <Reptiles /> },
      { path: '/servicios', element: <Services /> },
      { path: '/servicios/servicio-a-domicilio', element: <DeliveryService /> },
      { path: '/servicios/peluqueria', element: <HairSalon /> },
      { path: '/nosotros', element: <AboutUs /> },
      { path: '/contacto', element: <ContactUs /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/login', element: <LogIn /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
