import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";

// import { }
const Footer = () => {
  return (
    <section>
      <div className=" bg-[#0E345A] py-20">
        <div className="flex w-[full] justify-around text-white ">
          <div className="flex flex-col gap-6">
            <h6 className="font-semibold text-2xl">MEFF LIBRARY</h6>
            <p>500 Terry Francine St.</p>
            <p>San Francisco, CA 94158</p>
            <p>123-456-7890</p>
            <p>info@my-domain.com</p>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="font-semibold text-2xl">SHOP</h6>
            <p>
              <a href="">FAQ</a>
            </p>
            <p>
              <a href="">Shipping & Returns</a>
            </p>
            <p>
              <a href="">Store Policy</a>
            </p>
            <p>
              <a href="">Payment Methods</a>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="font-semibold text-2xl">SOCIALS</h6>
            <div className="flex flex-col gap-3">
              <Link to="https://www.facebook.com/">
                <IonIcon name="logo-facebook" className="text-3xl" />
              </Link>
              <Link to="https://x.com/i/flow/login">
                <IonIcon name="logo-twitter" className="text-3xl" />
              </Link>
              <Link to="https://www.instagram.com/">
                <IonIcon name="logo-instagram" className="text-3xl" />
              </Link>
              <Link to="https://www.pinterest.com/">
                <IonIcon name="logo-pinterest" className="text-3xl" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="font-semibold text-2xl">BE THE FIRST TO KNOW</h6>
            <p>Sign up for our newsletter</p>
            <form className="flex flex-col" action="">
              <label htmlFor="email">Enter your email here*</label>
              <input className="border-2 bg-[#0E345A]" id="email" type="text" />
            </form>
            <div className="flex">
              <input type="checkbox" className="w-[20px]" />
              <p className="ml-3">Yes, subscribe me to your newsletter.</p>
              <button className="border-2 w-[100px] flex ml-10 justify-center">
                Submit
              </button>
            </div>
          </div>
        </div>
        <hr className="mb-10 divide-white ml-20 mr-16 mt-10" />
        <div className="flex justify-around ">
          <div className="content-center items-center  flex">
            <a
              href="#"
              className="bg-[#0E345A] w-[70px] h-[40px] content-center text-white font-bold text-center"
            >
              MEFF
            </a>
            <a
              href="#"
              className="w-[80px] h-[40px] content-center bg-[white] hover:bg-[#0E345A] hover:text-white border-2 text-center"
            >
              LIBRARY
            </a>
          </div>
          <div className="flex gap-24 text-white">
            <ul className="flex gap-x-10">
              <li>
                <a className="hover:underline" href="">
                  Terms of use
                </a>
              </li>
              <li>
                <a className="hover:underline" href="">
                  Privicy Statement
                </a>
              </li>
              <li>
                <a className="hover:underline" href="">
                  Accessibility Statement
                </a>
              </li>
            </ul>
            <p>
              <a href="">© 2024 Meff Library System</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
