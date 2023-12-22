import done from "../assets/images/done.png";

const Pricing = () => {
  return (
    <div className="bg-[#FAFAFA] py-10 lg:py-24" id="pricing">
      <h2 className="text-3xl lg:text-5xl text-center font-semibold mb-8 lg:mb-20 md:px-12">
        Pricing Plan
      </h2>
      <div className="flex gap-7 flex-col lg:flex-row lg:justify-between lg:max-w-[1100px] mx-auto p-5 lg:p-2">
        <div className="flex-1 border-2 bg-white px-8 py-6 rounded-xl">
          <p className="font-semibold">Standart</p>
          <h1 className="text-4xl lg:text-6xl font-semibold my-6">Free</h1>
          <p>
            “Sign up to receive your sensor, download the DecodedSelf app and
            get real-time insights”
          </p>
          <button className="text-[#2251D4] border-2 border-[#2251D4] bg-[#2251D44D] w-full rounded-full py-2 my-7">
            Get Free Access
          </button>
          <h3 className="font-semibold">Book a Call</h3>
          <div className="mt-2">
            <div className="flex items-center">
              <img src={done} alt="" className="w-[22px]" />
              <p className="ml-2">One request at a time</p>
            </div>
            <div className="flex items-center">
              <img src={done} alt="" className="w-[22px]" />
              <p className="ml-2">Two weeks of service</p>
            </div>
            <div className="flex items-center">
              <img src={done} alt="" className="w-[22px]" />
              <p className="ml-2">Pay as you go</p>
            </div>
            <div className="flex items-center">
              <img src={done} alt="" className="w-[22px]" />
              <p className="ml-2">Average 3-4 business day delivery</p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#2251D41A] border-2 border-[#2251D4] px-8 py-6 rounded-xl">
          <p className="font-semibold">Annual Plan</p>
          <h1 className="font-semibold my-6">
            <span className="text-2xl lg:text-3xl text-[#2251D4]">$</span>
            <span className="text-4xl lg:text-6xl">249</span>
            <span className="text-2xl lg:text-3xl">/Yr</span>
          </h1>
          <p>
            “Sign up to receive your sensor, download the DecodedSelf app and
            get real-time insights”
          </p>
          <button className="text-white border-2 border-[#2251D4] bg-[#2251D4] w-full rounded-full py-2 my-7">
            Get Yearly Plan
          </button>
          <h3 className="font-semibold">Book a Call</h3>
          <div className="mt-2">
            <div className="flex items-center">
              <img src={done} alt="" className="w-[22px]" />
              <p className="ml-2">One request at a time</p>
            </div>
            <div className="flex items-center">
              <img src={done} alt="" className="w-[22px]" />
              <p className="ml-2">Two weeks of service</p>
            </div>
            <div className="flex items-center">
              <img src={done} alt="" className="w-[22px]" />
              <p className="ml-2">Pay as you go</p>
            </div>
            <div className="flex items-center">
              <img src={done} alt="" className="w-[22px]" />
              <p className="ml-2">Average 3-4 business day delivery</p>
            </div>
          </div>
        </div>
        <div className="flex-1 border-2 bg-white px-8 py-6 rounded-xl">
          <p className="font-semibold">Monthly Plan</p>
          <h1 className="font-semibold my-6">
            <span className="text-2xl lg:text-3xl text-[#2251D4]">$</span>
            <span className="text-4xl lg:text-6xl">29</span>
            <span className="text-2xl lg:text-3xl">/Mo</span>
          </h1>
          <p>
            “Sign up to receive your sensor, download the DecodedSelf app and
            get real-time insights”
          </p>
          <button className="text-[#2251D4] border-2 border-[#2251D4] bg-[#2251D44D] w-full rounded-full py-2 my-7">
            Get Monthly Plan
          </button>
          <h3 className="font-semibold">Book a Call</h3>
          <div className="mt-2">
            <div className="flex items-center">
              <img src={done} alt="" className="w-[22px]" />
              <p className="ml-2">One request at a time</p>
            </div>
            <div className="flex items-center">
              <img src={done} alt="" className="w-[22px]" />
              <p className="ml-2">Two weeks of service</p>
            </div>
            <div className="flex items-center">
              <img src={done} alt="" className="w-[22px]" />
              <p className="ml-2">Pay as you go</p>
            </div>
            <div className="flex items-center">
              <img src={done} alt="" className="w-[22px]" />
              <p className="ml-2">Average 3-4 business day delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
