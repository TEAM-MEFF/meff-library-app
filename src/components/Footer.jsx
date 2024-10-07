import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex w-[full] justify-around ml-20 mt-20 bg-[#0E345A] text-white">
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
        <div className="flex flex-col gap-6">
          <Link to="https://www.facebook.com/">Facebook</Link>
          <Link to="https://x.com/i/flow/login">Twitter</Link>
          <Link to="https://www.instagram.com/">Instagram</Link>
          <Link to="https://www.pinterest.com/">Pinterest</Link>
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
          <button className="border-2 w-[100px] flex ml-10 justify-center">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
