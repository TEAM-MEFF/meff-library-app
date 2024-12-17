import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";

// import { }
const Footer = () => {
  return (
    <section className="bg-themeColor py-8 px-10 sm:px-7 md:px-5 lg:px-3 xl:px-0">
      <div className="2xl:max-w-7xl mx-auto">
        <div className="sm:flex flex-wrap w-full gap-5 justify-around text-white">
          <div className="flex flex-col gap-3 mb-10 sm:mb-5 md:mb-0">
            <h6 className="font-semibold text-2xl mb-3">CONTACT US</h6>
            <div className="text-slate-400 flex flex-col gap-3">
              <Link
                to={"https://thelibraryapp.netlify.app/"}
                target="_blank"
                title="MEFF Library Official Website"
                className="flex hover:underline hover:text-white"
              >
                <span>
                  <IonIcon
                    name="globe"
                    className="text-2xl mr-4 mt-1 self-center"
                  />
                </span>
                <p className="">www.mefflibrarygh.com</p>
              </Link>
              <Link
                to={"mailto:info@mefflibrarygh.com"}
                target="_blank"
                title="Send us a mail..."
                className="flex cursor-pointer hover:underline hover:text-white"
              >
                <span>
                  <IonIcon
                    name="mail"
                    className="text-2xl mr-4 mt-1 self-center"
                  />
                </span>
                <p className="">info@mefflibrarygh.com</p>
              </Link>
              <Link
                to={"tel:+233-244-456-789"}
                title="Let's jump on a call asap!"
                className="flex cursor-pointer hover:underline hover:text-white"
              >
                <span>
                  <IonIcon
                    name="call"
                    className="text-2xl mr-4 mt-1 self-center"
                  />
                </span>
                <p className="">+233-244-456-789</p>
              </Link>
              <Link
                to={
                  "https://maps.google.com/?q=Adoit+International+School,+Lapaz,+Accra"
                }
                target="_blank"
                title="Locate us..."
                className="flex cursor-pointer hover:underline hover:text-white"
              >
                <span>
                  <IonIcon
                    name="location-sharp"
                    className="text-2xl mr-4 mt-1 self-center"
                  />
                </span>
                <p className="">Oxford Street, Achimota, Accra - Ghana</p>
              </Link>
              <Link
                to={"/"}
                title="Working Hours..."
                className="flex cursor-pointer hover:underline hover:text-white"
              >
                <span>
                  <IonIcon
                    name="time"
                    className="text-2xl mr-4 mt-1 self-center"
                  />
                </span>
                <p className="">
                  Monday to Friday: 9 AM - 6 PM <br />
                  Saturday: 10 AM - 4 PM <br />
                  Sunday: Closed
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 mb-10 sm:mb-5 md:mb-0">
            <h6 className="font-semibold text-2xl ">USEFULL LINKS</h6>
            <div className="text-slate-400 flex flex-col gap-4">
              <Link className="hover:underline hover:text-white">FAQ</Link>
              <Link className="hover:underline hover:text-white">Archives</Link>
              <Link className="hover:underline hover:text-white">
                File a Complaint
              </Link>
              <Link className="hover:underline hover:text-white">
                Shipping & Returns
              </Link>
              <Link className="hover:underline hover:text-white">
                Payment Methods
              </Link>
              <Link className="hover:underline hover:text-white">
                Store Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-5 md:mb-0">
            <h6 className="font-semibold text-2xl">SOCIALS</h6>
            <div className="flex md:flex-col flex-row flex-wrap gap-3 items-start text-slate-400">
              <Link to="https://www.pinterest.com/">
                <IonIcon
                  name="logo-pinterest"
                  className="text-3xl hover:text-white"
                />
              </Link>
              <Link to="https://www.instagram.com/">
                <IonIcon
                  name="logo-instagram"
                  className="text-3xl hover:text-white"
                />
              </Link>
              <Link to="https://www.behance.net/">
                <IonIcon
                  name="logo-behance"
                  className="text-3xl hover:text-white"
                />
              </Link>
              <Link to="https://www.facebook.com/">
                <IonIcon
                  name="logo-facebook"
                  className="text-3xl hover:text-white"
                />
              </Link>
              <Link to="https://x.com/i/flow/login">
                <IonIcon
                  name="logo-twitter"
                  className="text-3xl hover:text-white"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="font-semibold text-2xl">BE THE FIRST TO KNOW</h6>
            <div className="flex flex-col gap-3 text-slate-400">
              <p className="font-bold">Sign up for our newsletter</p>
              <form className="flex flex-col gap-2" action="">
                <label htmlFor="email">Enter your email here*</label>
                <input
                  className="border-2 p-3 outline-none bg-themeColor active:border-2 "
                  id="email"
                  required
                  type="email"
                />
                <div className="flex mt-2">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    required
                    className="w-[30px]"
                  />
                  <label className="ml-2 mx-auto my-auto" htmlFor="checkbox">
                    Yes, subscribe me to your newsletter.
                  </label>
                </div>
                <button className="border-[0.1px] w-[100px] flex justify-center rounded-lg p-2 sm:p-3 md:p-4 lg:px-5 lg:py-3 mt-4 hover:bg-[#021629] hover:border-themeColor self-end sm:self-start">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr className="my-10 divide-white w-[89%] mx-auto" />
        <div className="flex flex-col md:flex-row md:justify-around">
          <div className="content-center items-center shadow-lg hidden md:block">
            <Link to={"/"} className="shadow-xl">
              <span className="bg-themeColor text-lg px-4 py-2  text-white font-bold content-center text-center">
                MEFF
              </span>
              <span
                to={"/"}
                className=" px-2 py-1.5 text-lg text-themeColor content-center hover:bg-themeColor hover:text-white border-themeColor border- border-2 text-center bg-white"
              >
                LIBRARY
              </span>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:justify-around gap-5 md:gap-10 lg:gap-28 xl:gap-36 mb-5 items-start justify-start ">
            <ul className="flex flex-col md:flex-row md:justify-around gap-x-2 md:gap-x-2 lg:gap-x-10 gap-y-2 text-slate-400 ml-0 md:ml-5 lg:ml-0">
              <Link className="hover:underline hover:text-white" to={"/"}>
                Terms of use
              </Link>
              <Link className="hover:underline hover:text-white" to={"/"}>
                Privicy Statement
              </Link>
              <Link className="hover:underline hover:text-white" to={"/"}>
                Accessibility Statement
              </Link>
            </ul>
            <p className="text-white">© 2024 Meff Library System</p>
          </div>
        </div>
        <div>
          <div className="text-white text-center font-mono mt-3 md:flex md:gap-5 items-center justify-center text-base md:text-lg lg:text-xl">
            Made with ❤️ by
            <p>
              <span className="names">M</span>ichael,{" "}
              <span className="names">E</span>fuwa,{" "}
              <span className="names">F</span>elicity &{" "}
              <span className="names">F</span>rederick.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
