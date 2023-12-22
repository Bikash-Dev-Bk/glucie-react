import bannerImage from '../assets/images/banner.png';


const NavbarAndBanner = () => {
  return (
    <div className=" flex gap-8 lg:gap-16 flex-col lg:flex-row justify-center lg:justify-between mt-5">
      <div className="flex-1">
        {/* Navbar   */}
        <div className="navbar">
          <div className="navbar-start">
            <p className="text-black normal-case text-2xl lg:text-3xl font-bold tracking-[.08em] cursor-pointer pl-3 lg:pl-0">
              Glucie®
            </p>
          </div>
          {/* Desktop  */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">
              <li className="hover:text-[#2979ff]">
                <a href="#features">Features</a>
              </li>
              <li className="hover:text-[#2979ff]">
                <a href="#testimonials">Testimonials</a>
              </li>
              <li className="hover:text-[#2979ff]">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="hover:text-[#2979ff]">
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </div>

          {/* mobile   */}
          <div className="navbar-end lg:hidden">
            <div className="dropdown relative">
              <label  className="btn btn-ghost lg:hidden">
                <i className="fa-solid fa-bars text-2xl"></i>
              </label>
              <ul
                
                className="menu menu-sm dropdown-content absolute mt-0 right-3 z-[1] p-2 bg-white shadow rounded-box w-52 text-xl"
              >
                <li className="hover:text-[#2979ff]">
                  <a href="#features">Features</a>
                </li>
                <li className="hover:text-[#2979ff]">
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li className="hover:text-[#2979ff]">
                  <a href="#pricing">Pricing</a>
                </li>
                <li className="hover:text-[#2979ff]">
                  <a href="#faqs">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Banner   */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex flex-col justify-center lg:justify-end mt-16 lg:mt-44 p-5"
        >
          <h1 className="text-4xl lg:text-7xl font-semibold">
            Understand How Food Impact
            <span className="bg-gradient-yellow">Your Perfect Body</span>
          </h1>
          <p className="text-lg mt-8 mb-10">
            A personalized program based on your body’s unique reactions and
            scientific studies.
          </p>
          <div>
            <button className="text-white border-2 border-[#2251D4] bg-[#2251D4] rounded-full px-5 lg:px-8 py-2 mr-3 lg:mr-5">
              Shop Now
            </button>
            <button className="text-[#2251D4] border-2 border-[#2251D4] bg-[#2251D44D] rounded-full px-5 lg:px-8 py-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* banner image  */}
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="flex-1 flex justify-center lg:justify-end p-5"
      >
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default NavbarAndBanner;
