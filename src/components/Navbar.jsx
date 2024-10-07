import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";




const Navbar = () => {
  return (
    <nav className="w-[full] h-[60px] flex justify-around ">
      <div className="content-center items-center mr-80 w-[160px] flex">
        <a href="#" className="bg-[#0E345A] w-[70px] h-[40px] content-center text-white font-bold text-center">
          MEFF
        </a>
        <a href="#" className="w-[80px] h-[40px] content-center hover:bg-[#0E345A] hover:text-white border-2 text-center">LIBRARY</a>
      </div>
      <ul className="flex justify-center items-center gap-x-20">
        <li>
          <a className=" hover:text-gray-500" href="#">Bookstore</a>
        </li>
        <li>
          <a className=" hover:text-gray-500"  href="#">Events</a>
        </li>
        <li>
          <a className=" hover:text-gray-500"  href="#">About</a>
        </li>
        <li>
          <a className=" hover:text-gray-500"  href="#">Contact</a>
        </li>
        <li>
          <a className=" hover:text-gray-500"  href="#"><FontAwesomeIcon icon={faPerson} /> Log In <FontAwesomeIcon icon={faCartPlus} /></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
