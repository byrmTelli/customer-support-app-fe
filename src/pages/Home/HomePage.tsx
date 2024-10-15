import NavigationCard from "../../components/NavigationCard/NavigationCard";
import { TbMessageQuestion } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineContentPasteSearch } from "react-icons/md";

const fastLink = [
  {
    title: "Yeni Destek Talebi",
    icon: <FaHandsHelping />,
    content: "Content here",
  },
  {
    title: "Sıkça Sorulan Sorular",
    icon: <TbMessageQuestion />,
    content: "Content here",
  },
  {
    title: "Topluluk",
    icon: <FaPeopleGroup />,
    content: "Content here",
  },
  {
    title: "Hizmet Geçmişi",
    icon: <MdOutlineContentPasteSearch />,
    content: "Content here",
  },
];

export default function HomePage() {
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center text-gray-800">
      <div className="h-1/5">
        <h1 className="text-3xl font-semibold">
          Welcome <span className="text-teal-700">Bayram Telli!</span>
        </h1>
        <h1 className="text-5xl font-bold">
          You always deserve <span className="text-teal-700">better...</span>
        </h1>
      </div>
      <div className="flex w-1/2 p-1">
        <input
          type="text"
          className="h-[50px] w-full border border-teal-700 rounded-l-lg outline-none p-2"
          placeholder="Ara..."
        />
        <button className="bg-teal-700 text-gray-200 hover:bg-teal-600 w-1/6 rounded-r-lg">
          Ara
        </button>
      </div>
      <div className="flex gap-3">
        {fastLink.map((item, index) => (
          <NavigationCard
            key={index}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}
