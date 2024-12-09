import { forwardRef } from "react";
import callCenterImage from "../../../assets/callcenter.jpg";
import createTicket from "../../../assets/CreateTicket.jpg";
import CallCenterSectionCard from "./CallCenterSectionCard/CallCenterSectionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const CallCenter = forwardRef<HTMLDivElement>((props, ref) => {
  const callCenterSections = [
    {
      title: "Technical Support",
      content:
        "Facing technical issues? Our skilled team is here to help you resolve any technical difficulties, ensuring a smooth and seamless experience for you.",
      image: createTicket,
      path: "customer/ticket/create",
    },
    {
      title: "Call Center 7/24",
      content:
        "Our Call Center is available 24/7 to assist you with any inquiries. Our dedicated team ensures that your concerns are addressed promptly and efficiently.",
      image: callCenterImage,
      path: "",
    },
  ];

  const settings = {
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,
    pagination: { clickable: true },
    autoplay: { delay: 5000 },
    modules: [Autoplay, Pagination],
  };
  return (
    <div
      ref={ref}
      className="h-screen w-full bg-sky-800 w-full flex flex-col items-center gap-4 p-4"
      id="call-center"
    >
      <div className="p-4">
        <h1 className="text-4xl text-gray-200 font-semibold">Services</h1>
      </div>
      <div className="w-full flex items-center justify-center h-full">
        <Swiper {...settings}>
          {callCenterSections.map((item, key) => (
            <SwiperSlide
              className="swiper-slide-custom question-slider"
              key={key}
            >
              <CallCenterSectionCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
});

export default CallCenter;
