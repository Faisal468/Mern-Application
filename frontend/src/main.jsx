import { StrictMode } from "react";
import { createRoot } from "react-dom/client";



import "./index.css";
import MainApp from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";




import Send from "./Components/footer/Send.jsx" ; 
import Blogs from "./Components/main/Components/Blogs.jsx"; 
import Weather from "./Weather/Weather.jsx";
import Signin from "./Navbar/Signin.jsx"; // Ensure correct import
<Createyouraccount />
import Createyouraccount from "./Navbar/Createyouraccount.jsx"; // Ensure correct import
import BookingForm from "./Components/main/Components/BookingForm.jsx";



const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<MainApp />}>
      <Route path="/weather" element={<Weather />} />
      
      
      </Route>
      <Route path="/signin" element={<Signin />} /> 
      <Route path="/createyouraccount" element={<Createyouraccount />} />
      <Route path="/Blogs" element={<Blogs />} />
      <Route path="/BookingForm" element={<BookingForm /> } />
      <Route path="/Send" element={<Send />} />
      

    </>
  )
);



      




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);



// export default ErrorPage; // Ensure correct export


