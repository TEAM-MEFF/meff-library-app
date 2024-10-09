import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header>
      <nav className="w-[full] h-[60px] flex justify-around ">
        <div className="content-center items-center">
          <a href="#">
            <span className="bg-[#0E345A] px-4 py-2  text-white font-bold content-center text-center">MEFF</span>
            <span href="#" className="px-2 py-2 content-center hover:bg-[#0E345A] hover:text-white border-2 text-center">LIBRARY</span></a>
        </div>
        <ul className="flex justify-center items-center gap-x-20">
          <li>
            <a className=" hover:text-gray-500" href="#">Bookstore</a>
          </li>
          <li>
            <a className=" hover:text-gray-500" href="#">Events</a>
          </li>
          <li>
            <a className=" hover:text-gray-500" href="#">About</a>
          </li>
          <li>
            <a className=" hover:text-gray-500" href="#">Contact</a>
          </li>
          <li>
            <a className=" hover:text-gray-500" href="#"><FontAwesomeIcon icon={faPerson} /> Log In <FontAwesomeIcon icon={faCartPlus} /></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;