import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Auth from "./Pages/Auth";
import Landing from "./Pages/Landing";

function App() {


  const router = createBrowserRouter([
    {path: "/",element:<Landing/>},
    {path: "/auth",element:<Auth/>},
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
