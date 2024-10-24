import NavigationCard from "../../components/NavigationCard/NavigationCard";
import { TbMessageQuestion } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { useAppSelector } from "../../store/hooks";

const fastLink = [
  {
    title: "Yeni Destek Talebi",
    icon: <FaHandsHelping />,
    content: "Content here",
    path: "/support/create",
  },
  {
    title: "Sıkça Sorulan Sorular",
    icon: <TbMessageQuestion />,
    content: "Content here",
    path: "/popular-questions",
  },
  {
    title: "Topluluk",
    icon: <FaPeopleGroup />,
    content: "Content here",
    path: "/community",
  },
  {
    title: "Hizmet Geçmişi",
    icon: <MdOutlineContentPasteSearch />,
    content: "Content here",
    path: "/ticket-history",
  },
];

export default function HomePage() {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="w-full h-full flex flex-col gap-4 items-center text-gray-800">
      <div className="w-full h-screen grid px-4 lg:grid-cols-2 justify-center">
        <div className="flex flex-col items-center justify-center">
          {user.isAuthenticated ? (
            <h1 className="text-2xl md:text-3xl font-semibold">
              Welcome{" "}
              <span className="text-teal-700">{user.fullName ?? ""}!</span>
            </h1>
          ) : (
            <h1 className="text-3xl font-semibold">
              We are{" "}
              <span className="text-teal-700 capitalize">+1.5 mil. now!</span>
            </h1>
          )}
          <h1 className="text-3xl md:text-5xl font-bold">
            You always deserve <span className="text-teal-700">better...</span>
          </h1>
          <div className="flex w-full lg:w-3/4 p-1 mt-4 text-sm md:text-base">
            <input
              type="text"
              className="h-[50px] w-full border border-teal-700 rounded-l-lg outline-none p-2"
              placeholder="Ara..."
            />
            <button className="bg-teal-700 text-gray-200 hover:bg-teal-600 w-1/4 md:w-1/6 rounded-r-lg">
              Ara
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-3">
            {fastLink.map((item, index) => (
              <NavigationCard
                key={index}
                icon={item.icon}
                title={item.title}
                content={item.content}
                path={item.path}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
