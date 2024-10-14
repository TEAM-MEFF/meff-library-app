import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Testimonials from "./components/Testimonials";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NavbarResponsive from "../../components/NavbarResponsive";
import SignUp from "../../components/SignUp";
import Login from "../../components/Login";
import Testimonies from "../../components/Testimonies";
import BookFetch from "../bookFetch/BookFetch";
import BookFetchMain from "../bookFetchMain";
import Library from "../floatingButton";
import FavoriteBooks from "../../components/FavoriteBooks";


const BookList = () => {
  return (
    <div className="landingPage">
      <NavbarResponsive />
      {/* <Library /> */}
      <Hero />
      {/* <Link to="/add-new">Add Book</Link> */}
      <BookFetchMain />
      <hr className="mt-5" />
      <BookFetch />
      <hr className="mt-5" />
      <FavoriteBooks />
      {/* <SignUp /> */}
      {/* <Login /> */}
      <Testimonies />
      {/* <Testimonials /> */}
      {/* <div>BookList Content goes here</div> */}
      <Footer />
    </div>
  )
}

export default BookList;