import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Home } from "./components/Home.tsx";
import { Login } from "./components/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace={true} />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <>{
    <RouterProvider router={router} />
    }</>;
}

export default App;
