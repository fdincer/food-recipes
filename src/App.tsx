import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        
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
