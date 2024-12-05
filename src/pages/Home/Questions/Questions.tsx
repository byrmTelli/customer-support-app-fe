import { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import QuestionCard from "../../PopularQuestions/QuestionCard/QuestionCard";
import { popularQuestions } from "../../PopularQuestions/QuestionCard/constants";

const Questions = forwardRef<HTMLDivElement>((props, ref) => {
  const settings = {
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    pagination: { clickable: true },
    autoplay: { delay: 3000 },
    modules: [Autoplay, Pagination],
  };

  return (
    <div
      ref={ref}
      className="w-full min-h-screen bg-[url('https://img.freepik.com/free-photo/3d-rendering-business-meeting-working-room-office-building_105762-1972.jpg?t=st=1730138537~exp=1730142137~hmac=6e57c470b65555dbc0b2eae9eb77a247b91f1c9ad29cb82e04b259e35c625d12&w=1380')] flex flex-col items-center py-4 gap-4"
    >
      <div className="w-full h-full bg-slate-300 bg-opacity-60 flex flex-col items-center justify-center p-4">
        <h1 className="text-teal-700 font-semibold text-4xl">
          Popular Questions
        </h1>
        <div className="w-full h-full flex items-center justify-center">
          <Swiper {...settings}>
            {popularQuestions.map((item, key) => (
              <SwiperSlide
                className="swiper-slide-custom question-slider"
                key={key}
              >
                <QuestionCard
                  data={{ title: item.title, content: item.content }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
});

export default Questions;
