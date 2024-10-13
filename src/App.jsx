import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookList from './pages/booklist'
import AddBook from './pages/addBook'
import BookDetailsPage from './pages/bookDetails';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UnderConstruction from './pages/underConstruction';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BookList />
    },
    {
      path: "/add-new",
      element: <AddBook />
    },
    {
      path: "/books/:id",
      element: <BookDetailsPage />
    },
    {
      path: "/sign-up/",
      element: <SignUp />
    },
    {
      path: "/login/",
      element: <Login />
    },
    {
      path: "/pending",
      element: <UnderConstruction />
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
