import { Navigate, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import HouseKeeping from "../Layouts/HouseKeeping";
import RoomList from "../Views/HouseKeeping/RoomList";
import RoomCreate from "../Views/HouseKeeping/RoomCreate";
import Landing from "../Views/HouseKeeping/Landing";
import RoomUpdate from "../Views/HouseKeeping/RoomUpdate";
import SignIn from "../Views/HouseKeeping/Auth/SignIn";

const houseKeepingRouter = createBrowserRouter([
  {
    path: "house-keeping/",
    element: <HouseKeeping />,
    children: [
      {
        path: "room/",
        element: <RoomList />,
      },
      {
        path: "room/create",
        element: <RoomCreate />,
      },
      {
        path: "room/update/:roomId",
        element: <RoomUpdate />,
      },
    ],
  },
  {
    path: "auth/",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

const Router = () => {
  
  return (
    <>
    <CssBaseline/>
      <RouterProvider router={houseKeepingRouter} />
    </>
  );
};

export default Router;
