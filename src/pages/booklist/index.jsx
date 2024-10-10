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


const BookList = () => {
  return (
    <div className="landingPage">
      {/* <NavbarResponsive /> */}
      {/* <Hero /> */}
      {/* <Link to="/add-new">Add Book</Link> */}
      <BookFetch />
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <Testimonies /> */}
      {/* <Testimonials /> */}
      {/* <div>BookList Content goes here</div> */}
      {/* <Footer /> */}
    </div>
  )
}

export default BookList;