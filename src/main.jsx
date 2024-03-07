
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Books from './components/Books/Books.jsx';
import Error from './components/Error/Error.jsx';
import About from './components/About/About.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
