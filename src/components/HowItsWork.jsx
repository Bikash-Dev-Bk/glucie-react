import mobileImage from "../assets/images/mobile.png"


const HowItsWork = () => {
  return (
    <div className="lg:max-w-[1200px] mx-auto my-16 lg:my-44 p-5 lg:p-0">
      <h2 className="text-3xl md:text-5xl text-center font-semibold">
        How Glucie Work
      </h2>
      <div className="flex lg:gap-28 flex-col-reverse lg:flex-row lg:justify-between mt-8 lg:mt-24">
        <div className="flex-1 mt-10 lg:mt-0">
          <ol className="border-l-4 border-[#2251D4]">
            {/* First item */}
            <li>
              <div className="flex-start flex items-center">
                <div className="-ml-[9px] -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#2251D4]"></div>
              </div>

              <div className="mb-6 ml-12 pb-6">
                <h4 className="-mt-6 text-2xl font-semibold">
                  01. Subscribe and receive your CGM
                </h4>
                <p className="mb-4 mt-4 text-[#343232]">
                  Always refer to the official website or contact customer
                  support for the most accurate and up-to-date information.
                  Additionally, ensure that you are aware of the terms and
                  conditions, including cancellation policies, before
                  subscribing.
                </p>
              </div>
            </li>

            {/* Second item  */}
            <li>
              <div className="flex-start flex items-center">
                <div className="-ml-[9px] -mt-2 mr-10 flex h-4 w-4 items-center justify-center rounded-full bg-[#2251D4]"></div>
              </div>
              <div className="mb-6 ml-12 pb-6">
                <h4 className="-mt-6 text-2xl font-semibold">
                  02. Log your meals and activities
                </h4>
                <p className="mb-4 mt-4 text-[#343232]">
                  Always refer to the official website or contact customer
                  support for the most accurate and up-to-date information.
                  Additionally, ensure that you are aware of the terms and
                  conditions, including cancellation policies, before
                  subscribing.
                </p>
              </div>
            </li>

            {/* Third item  */}
            <li>
              <div className="flex-start flex items-center">
                <div className="-ml-[9px] -mt-2 mr-10 flex h-4 w-4 items-center justify-center rounded-full bg-[#2251D4]"></div>
              </div>
              <div className="mb-6 ml-12 pb-6">
                <h4 className="-mt-6 text-2xl font-semibold">
                  03. Get personalised tips
                </h4>
                <p className="mb-4 mt-4 text-[#343232]">
                  Always refer to the official website or contact customer
                  support for the most accurate and up-to-date information.
                  Additionally, ensure that you are aware of the terms and
                  conditions, including cancellation policies, before
                  subscribing.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="flex-1">
          <img src={mobileImage} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default HowItsWork;
