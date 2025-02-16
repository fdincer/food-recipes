import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout';

import HomePage from "./Pages/Homepage/HomePage"
import SearchPage from './Pages/Searchpage/SearchPage';
import RecipePage from './Pages/Recipepage/RecipePage';
import { homeLoader } from './Pages/Homepage/homeLoader';
import { recipeLoader } from './Pages/Recipepage/recipeLoader';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader
      },
      {
        path: "/search",
        element: <SearchPage />
      },
      {
        path: "/recipe/:name",
        element: <RecipePage />,
        loader: recipeLoader
      }
    ]
  }
]);

function App() {

  return (
      <RouterProvider router={router} />
  );
}

export default App;
