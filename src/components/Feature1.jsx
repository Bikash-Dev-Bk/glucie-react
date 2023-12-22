import featureImage from "../assets/images/decode1.png";
import featureImageScore from "../assets/images/score.png";

const Feature1 = () => {
  return (
    <div
      className=" flex gap-8 lg:gap-0 flex-col-reverse lg:flex-row items-center"
      id="features"
    >
      <div className="flex-1 p-5 lg:p-0">
        <div className="text-center max-w-[500px] mx-auto mb-10 lg:mb-0">
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
        <img src={featureImage} alt="" />
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="absolute bottom-[10%] lg:bottom-[30%] left-[8%] lg:left-[15%]"
        >
          <img src={featureImageScore} alt="" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Feature1;
