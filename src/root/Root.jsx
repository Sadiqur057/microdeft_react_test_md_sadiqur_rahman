import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import { Toaster } from 'react-hot-toast';
const Root = () => {
  return (
    <>

      <Navbar />
      <Toaster />
      <Outlet />
    </>
  );
};

export default Root;