import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const BookList = () => {
  return (
    <div>
        <Navbar/>
        <Link to="/add-new">Add Book</Link>
        <div>BookList Content goes here</div>
        <Footer/>
    </div>
  )
}

export default BookList;