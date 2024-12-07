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
    slidesPerView: 1,
    centeredSlides: true,
    pagination: { clickable: true },
    autoplay: { delay: 3000 },
    modules: [Autoplay, Pagination],
  };

  return (
    <div
      ref={ref}
      className="w-full min-h-screen bg-[url('/src/assets/mostpopularquestions.jpg')] bg-no-repeat bg-cover bg-center flex flex-col items-center py-4 gap-4"
    >
      <div className="w-full h-full bg-sky-800 bg-opacity-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-gray-200 font-semibold text-4xl p-4 border border-gray-200 rounded-xl">
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
