import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";

// import { }
const Footer = () => {
  return (
    <section>
      <div className=" bg-[#0E345A] py-8">
        <div className="flex w-full justify-around text-white ">
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-2xl mb-3">CONTACT US</h6>
            <div className="text-slate-400 flex flex-col gap-3">
              <p><span><IonIcon name="globe" className="text-xl mr-[0.4rem]" /></span> www.mefflibrarygh.com</p>
              <p><span><IonIcon name="mail" className="text-xl mr-[0.4rem]" /></span> info@mefflibrarygh.com</p>
              <p><span><IonIcon name="call" className="text-xl mr-[0.4rem]" /></span> +233-456-7890</p>
              <p><span><IonIcon name="location-sharp" className="text-xl mr-[0.4rem]" /></span> Oxford Street, Achimoto, Accra - Ghana</p>
              <p><span><IonIcon name="time" className="text-xl mr-[0.4rem]" /></span> Monday to Friday: 9 AM - 6 PM <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Saturday: 10 AM - 4 PM <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sunday: Closed</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="font-semibold text-2xl ">USEFULL LINKS</h6>
            <div className="text-slate-400 flex flex-col gap-4">
              <Link className="hover:underline hover:text-white">FAQ</Link>
              <Link className="hover:underline hover:text-white">Archives</Link>
              <Link className="hover:underline hover:text-white">File a Complaint</Link>
              <Link className="hover:underline hover:text-white">Shipping & Returns</Link>
              <Link className="hover:underline hover:text-white">Payment Methods</Link>
              <Link className="hover:underline hover:text-white">Store Policy</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="font-semibold text-2xl">SOCIALS</h6>
            <div className="flex flex-col gap-3 text-slate-400">
              <Link to="https://www.pinterest.com/">
                <IonIcon name="logo-pinterest" className="text-3xl hover:text-white" />
              </Link>
              <Link to="https://www.instagram.com/">
                <IonIcon name="logo-instagram" className="text-3xl hover:text-white" />
              </Link>
              <Link to="https://www.behance.net/">
                <IonIcon name="logo-behance" className="text-3xl hover:text-white" />
              </Link>
              <Link to="https://www.facebook.com/">
                <IonIcon name="logo-facebook" className="text-3xl hover:text-white" />
              </Link>
              <Link to="https://x.com/i/flow/login">
                <IonIcon name="logo-twitter" className="text-3xl hover:text-white" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="font-semibold text-2xl">BE THE FIRST TO KNOW</h6>
            <div className="flex flex-col gap-3 text-slate-400">
              <p className="font-bold">Sign up for our newsletter</p>
              <form className="flex flex-col gap-2" action="">
                <label htmlFor="email">Enter your email here*</label>
                <input className="border-2 p-3  outline-none bg-[#0E345A] active:border-2" id="email" required type="email" />
                <div className="flex mt-5 ">
                  <input type="checkbox" name="checkbox" id="checkbox" required className="w-[30px]" />
                  <label className="mt-5 ml-3 mr-8" htmlFor="checkbox">Yes, subscribe me to your newsletter.</label>
                  <button className="border-2 w-[100px] flex justify-center rounded-xl p-5 hover:bg-[#021629] hover:border-none">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="my-10 divide-white w-[89%] mx-auto" />
        <div className="flex justify-around ">
          <div className="content-center items- shadow-lg">
            <Link href="#">
              <span className="bg-[#0E345A] text-lg px-4 py-2  text-white font-bold content-center text-center">MEFF</span>
              <span href="#" className=" px-2 py-1.5 text-lg text-[#0E345A] content-center hover:bg-[#0E345A] hover:text-white border-[#0E345A] border- border-2 text-center bg-white">LIBRARY</span></Link>
          </div>
          <div className="flex gap-24 ">
            <ul className="flex gap-x-10 text-slate-400">
              <Link className="hover:underline hover:text-white" href="">
                Terms of use
              </Link>
              <Link className="hover:underline hover:text-white" href="">
                Privicy Statement
              </Link>
              <Link className="hover:underline hover:text-white" href="">
                Accessibility Statement
              </Link>
            </ul>
            <p className="text-white">© 2024 Meff Library System</p>
          </div>
        </div>
        <div>
          <p className="text-white text-center font-mono mt-3">Made with ❤️ by <span className="names">M</span>ichael, <span className="names">E</span>fuwa, <span className="names">F</span>elicity & <span className="names">F</span>rederick.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
