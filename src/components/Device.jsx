import device from "../assets/images/device.png"
import tick from "../assets/images/tik.png"



const Device = () => {
  return (
    <div className="my-16 lg:my-44 p-5 lg:p-2">
      <h2 className="text-3xl lg:text-5xl text-center font-semibold mb-20 md:px-12">
        Your Body Will Thank You
      </h2>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="lg:hidden flex justify-center items-center mb-8 lg:mb-0"
      >
        <img src={device} alt="" />
      </div>
      <div className="flex gap-5 lg:gap-32 flex-row lg:justify-between lg:items-center">
        <div className="flex-1">
          <div className="flex flex-col justify-center mb-8">
            <img
              src={tick}
              alt=""
              className="w-10 mx-auto"
            />
            <h1 className="text-center text-xl lg:text-2xl font-semibold my-2">
              No More Cravings
            </h1>
            <p className="text-center">
              Say goodbye to the struggle of resisting unhealthy cravings and
              embrace.
            </p>
          </div>
          <div className="flex flex-col justify-center mb-8">
            <img
              src={tick}
              alt=""
              className="w-10 mx-auto"
            />
            <h1 className="text-center text-xl lg:text-2xl font-semibold my-2">
              Increased longevity
            </h1>
            <p className="text-center">
              Unlock the Secrets of Increased Longevity" is a groundbreaking.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={tick}
              alt=""
              className="w-10 mx-auto"
            />
            <h1 className="text-center text-xl lg:text-2xl font-semibold my-2">
              Better skin
            </h1>
            <p className="text-center">
              journey to luminosity where science meets beauty in perfect
              harmony
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="flex-1 hidden lg:flex lg:justify-center lg:items-center"
        >
          <img src={device} alt="" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col justify-center mb-8 lg:mb-20">
            <img
              src={tick}
              alt=""
              className="w-10 mx-auto"
            />
            <h1 className="text-center text-xl lg:text-2xl font-semibold my-2">
              Improved Metabolic Health
            </h1>
            <p className="text-center">
              At the core of our program lies a wealth of evidence-based
              strategies, expertly curated to boost metabolism naturally.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={tick}
              alt=""
              className="w-10 mx-auto"
            />
            <h1 className="text-center text-xl lg:text-2xl font-semibold my-2">
              Increased longevity
            </h1>
            <p className="text-center">
              This innovative approach to energy enhancement combines
              scientifically-backed techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;
