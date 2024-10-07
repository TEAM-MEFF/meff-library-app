import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex w-[full] justify-around ml-20">
      <div className="flex flex-col gap-6">
        <h6>MEFF LIBRARY</h6>
        <p>500 Terry Francine St.</p>
        <p>San Francisco, CA 94158</p>
        <p>123-456-7890</p>
        <p>info@my-domain.com</p>
      </div>
      <div>
        <h6>shop</h6>
        <p>
          FAQ <br /> Shipping & Returns <br /> Store Policy <br /> Payment
          Methods
        </p>
      </div>
      <div>
        <h6>Socials</h6>
        <div className="flex flex-col">
          <Link to="https://www.facebook.com/">Facebook</Link>
          <Link to="https://x.com/i/flow/login">Twitter</Link>
          <Link to="https://www.instagram.com/">Instagram</Link>
          <Link to="https://www.pinterest.com/">Pinterest</Link>
        </div>
      </div>
      <div>
        <h6>Be the first to Know</h6>
        <p>Sign up for our newsletter</p>
        <form action="">
          <label htmlFor="email">Enter your email here*</label>
          <input id="email" type="text" />
        </form>
        <div>
          <input type="checkbox" />
          <p>Yes, subscribe me to your newsletter.</p>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
