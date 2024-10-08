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
            <h6 className="font-semibold">MEFF LIBRARY</h6>
            <p>500 Terry Francine St.</p>
            <p>San Francisco, CA 94158</p>
            <p>123-456-7890</p>
            <p>info@my-domain.com</p>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="font-semibold">SHOP</h6>
            <p>FAQ</p>
            <p>Shipping & Returns</p>
            <p>Store Policy</p>
            <p> Payment Methods</p>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="font-semibold">SOCIALS</h6>
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
            <h6 className="font-semibold">BE THE FIRST TO KNOW</h6>
            <p>Sign up for our newsletter</p>
            <form className="flex flex-col" action="">
              <label htmlFor="email">Enter your email here*</label>
              <input className="border-2 bg-[#0E345A]" id="email" type="text" />
            </form>
            <div className="flex">
              <input type="checkbox" />
              <p>Yes, subscribe me to your newsletter.</p>
              <button className="border-2 w-[100px] flex ml-10 justify-center">
                Submit
              </button>
            </div>
          </div>
        </div>
        <hr className="mb-10 divide-white ml-20 mr-16 mt-10" />
        <div className="flex ml-14">
        <div className="content-center items-center mr-80 w-[160px] flex">
        <a href="#" className="bg-[#0E345A] w-[70px] h-[40px] content-center text-white font-bold text-center">
          MEFF
        </a>
        <a href="#" className="w-[80px] h-[40px] content-center bg-[white] hover:bg-[#0E345A] hover:text-white border-2 text-center">LIBRARY</a>
      </div>
      <div className="flex gap-44 text-white">
        <ul className="flex gap-3">
          <li>Terms of use</li>
          <li>Privicy Statement</li>
          <li>Accessibility Statement</li>
        </ul>
        <p>© 2024 Meff Library System</p>
      </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
