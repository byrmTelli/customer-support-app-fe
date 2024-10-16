import BreadCrum from "../../components/BreadCrum/BreadCrum";
import { FaFileImport } from "react-icons/fa";
export default function CreateNewSupport() {
  return (
    <div>
      <BreadCrum />
      <div className="w-full h-screen flex justify-center px-4 py-4">
        <div className="lg:w-3/5 flex flex-col gap-4 py-4">
          <div className=" p-2 border border-gray-400 rounded-lg focus-within:border-teal-700">
            <input
              type="text"
              className="w-full outline-none p-1"
              placeholder="Sorununuzu tanımlayıcı bir başlık girin."
            />
          </div>
          <div className=" p-2 border border-gray-400 rounded-lg focus-within:border-teal-700">
            <p className="pl-2">
              Sorununuzu aşağıda sizin için ayırılan alanda lütfen açık bir
              şekilde tanımlayın.
            </p>
            <textarea
              className="w-full min-h-48 p-2 outline-none"
              placeholder="Sorununuzu burada belirtin."
            ></textarea>
          </div>
          <div className="w-full">
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex items-center gap-4 justify-center px-4 py-2 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-600"
            >
              <FaFileImport />
              Dosya Seç
            </label>
            <input id="file-upload" type="file" className="hidden" />
          </div>
          <div className="w-full">
            <button className="border border-teal-700 py-1 px-4 rounded-lg hover:bg-teal-600 hover:border-teal-600 bg-teal-700 font-semibold text-gray-200 w-full h-[2.3rem]">
              Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
