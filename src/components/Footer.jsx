import fb from "../assets/images/logo/fb.svg";
import insta from "../assets/images/logo/Instagram_white.svg";
import linkdin from "../assets/images/logo/linkdin.svg";
import x from "../assets/images/logo/x.svg";

const Footer = () => {
  return (
    <footer className=" bg-none lg:bg-[#E4E9F6]">
      <div className="lg:max-w-[1100px] mx-auto pt-10 pb-10 lg:pt-20 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between mb-12 lg:mb-24">
          <div>
            <h2 className=" text-4xl font-semibold mb-8">Glucie®</h2>
            <div className="lg:flex gap-4 hidden">
              <a href="https://www.facebook.com/">
                <img src={fb} alt="" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={insta} alt="" />
              </a>
              <a href="https://twitter.com/home">
                <img src={x} alt="" />
              </a>
              <a href="https://www.linkedin.com/feed/">
                <img src={linkdin} alt="" />
              </a>
            </div>
          </div>
          <div className="flex gap-5 lg:gap-20 flex-col lg:flex-row lg:justify-between ">
            <div className="flex lg:gap-20 justify-between ">
              <div>
                <h1 className="text-2xl font-semibold mb-4">App</h1>
                <p>Home</p>
                <p>Feature</p>
                <p>Pricing</p>
                <p>Testimonials</p>
                <p>FAQs</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Information</h2>
                <p>Privacy Policy</p>
                <p>Term and Conditions</p>
              </div>
            </div>
            <div>
              <hr className="h-[3px] w-full my-2 bg-gray-300 lg:hidden mb-10" />
              <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
              <input
                type="text"
                name=""
                id=""
                placeholder="Fill Your Email"
                className="w-full px-5 py-3 rounded-xl"
              />
              <button className="text-white border-2 border-[#2251D4] bg-[#2251D4] w-full rounded-lg py-3 mt-4">
                Submit
              </button>
            </div>
          </div>
        </div>
        <hr className="h-[3px] w-full my-2 bg-gray-300" />
        <div className="mt-10">
          <div className="flex gap-4 lg:hidden">
            <a href="https://www.facebook.com/">
              <img src={fb} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={insta} alt="" />
            </a>
            <a href="https://twitter.com/home">
              <img src={x} alt="" />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <img src={linkdin} alt="" />
            </a>
          </div>
          <div className="flex justify-between lg:justify-start mt-10 lg:mt-0">
            <p className="font-semibold mr-16">© 2023 Glucie</p>
            <p className="underline font-semibold">Credits</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
