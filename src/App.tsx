import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout';

import HomePage from "./Pages/Homepage/HomePage"
import { homeLoader } from './Pages/Homepage/homeLoader';

import RecipePage from './Pages/Recipepage/RecipePage';
import { recipeLoader } from './Pages/Recipepage/recipeLoader';

import SearchRecipePage from './Pages/Searchpage/SearchRecipePage';
import { searchRecipeLoader } from './Pages/Searchpage/searchRecipeLoader';

import SearchIngredientPage from './Pages/Searchpage/SearchIngredientPage';
import { searchIngredientLoader } from './Pages/Searchpage/searchIngredientLoader';

import SearchCategoryPage from './Pages/Searchpage/SearchCategoryPage';
import { searchCategoryLoader } from './Pages/Searchpage/searchCategoryLoader';




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
        element: <SearchRecipePage />,
        loader: searchRecipeLoader
      },
      {
        path: "/search/ingredient",
        element: <SearchIngredientPage />,
        loader: searchIngredientLoader
      },
      {
        path: "/search/category/:name",
        element: <SearchCategoryPage />,
        loader: searchCategoryLoader
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
