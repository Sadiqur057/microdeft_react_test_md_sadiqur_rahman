import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import AddCourse from "../pages/addCourse/AddCourse";
import MyCourse from "../pages/myCourse/MyCourse";
export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/add',
        element: <AddCourse />
      },
      {
        path: '/my',
        element: <MyCourse />
      },
    ]
  }
])

