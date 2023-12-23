import image1 from "../assets/images/testimonials/1.png";
import image2 from "../assets/images/testimonials/2.png";
import image3 from "../assets/images/testimonials/3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="testimonial mb-20 mt-10" id="testimonials">
      <h2 className="text-3xl lg:text-5xl text-center font-semibold mb-8 lg:mb-16 md:px-12">
        Customer Testimonials
      </h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide="1"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper lg:py-12"
      >
        <SwiperSlide className="w-full lg:w-[35%] p-5 lg:p-0">
          <img src={image1} className="w-full block" />
          <div className="content hidden mt-6">
            <h3 className="text-[22px] font-semibold">Emilie Oscar</h3>
            <p className="text-[16px] mb-5">
              “Sign up to receive your sensor, download the DecodedSelf app and
              get real-time insights”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide isActive="true" className="w-full lg:w-[35%] p-5 lg:p-0">
          <img src={image2} className="w-full block" />
          <div className="content hidden mt-6">
            <h3 className="text-[22px] font-semibold">Emilie Oscar</h3>
            <p className="text-[16px] mb-5">
              “Sign up to receive your sensor, download the DecodedSelf app and
              get real-time insights”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full lg:w-[35%] p-5 lg:p-0">
          <img src={image3} className="w-full block" />
          <div className="content hidden mt-6">
            <h3 className="text-[22px] font-semibold">Emilie Oscar</h3>
            <p className="text-[16px] mb-5">
              “Sign up to receive your sensor, download the DecodedSelf app and
              get real-time insights”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
