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
import BookFetchMain from "../bookFetchMain/index.jsx";
import Library from "../floatingButton";
import FavoriteBooks from "../../components/FavoriteBooks";

const BookList = () => {
  return (
    <div className="landingPage">
      <NavbarResponsive />
      {/* <Library /> */}
      <Hero />
      <BookFetchMain />
      <BookFetch />
      <FavoriteBooks />
      <Testimonies />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default BookList;
