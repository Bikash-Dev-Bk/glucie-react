import featureImage2 from "../assets/images/pizzza.png";
import slider from "../assets/images/slider.png";

const Feature2 = () => {
  return (
    <div className=" flex gap-8 md:gap-0 flex-col-reverse lg:flex-row-reverse items-center mt-10 lg:mt-0">
      <div className="flex-1 p-5 lg:p-0">
        <div className="text-center max-w-[500px] mx-auto my-10 lg:my-0">
          <h2 className="text-3xl lg:text-5xl font-semibold">
            Decode All Your Unique Body
          </h2>
          <p className="py-9 text-lg">
            One-size-fits-all advice doesn't work. So we'll provide you with the
            most advanced analysis of your gut bacteria, blood sugar and blood
            fats available.
          </p>
          <button className="text-base md:text-lg border-2 border-black px-8 py-3 rounded-full">
            Discover our tests
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <img src={featureImage2} className="w-full" alt="" />
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="absolute bottom-[10%] lg:bottom-[14%] left-[2%] md:left-[10%] lg:left-[10%]"
        >
          <img src={slider} alt="" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Feature2;
