import BreadCrum from "../../components/BreadCrum/BreadCrum";
import { FaFileImport } from "react-icons/fa";

export default function CreateNewSupport() {
  return (
    <div>
      <BreadCrum />
      <div className="w-full flex justify-center px-4 py-4">
        <div className="lg:w-3/5 flex flex-col gap-4 py-4">
          <div className="p-2">
            <h1 className="font-semibold">Bilgilendirme</h1>
            <p className="mt-4">
              Yaşadığınız problemle ilgili bu sayfa üzerinde bir kayıt
              oluşturabilirsiniz. Kayıt oluşturulduktan sonra en kısa sürede
              destek birimi tarafından incenelerek email ya da sms aracılığıyla
              size durum hakkında bilgi verilecektir. Oluşturulan kayıtların
              destek birimimiz tarafından ortalama dönüş süresi{" "}
              <b>5 iş günüdür.</b> Yaşadığınız problem için çok üzgünüz, en kısa
              sürede çözülmesi için elimizden geleni yapacağız.
            </p>
            <div className="w-full flex items-center justify-end mt-4">
              <div className="flex flex-col items-center justify-end text-sm">
                <p>Customer Support Service</p>
                <p>Destek Ekibi</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold pl-2">Başlık</h1>
            <div className=" p-2 border border-gray-400 rounded-lg focus-within:border-teal-700">
              <input
                type="text"
                className="w-full outline-none p-1"
                placeholder="Sorununuzu tanımlayıcı bir başlık girin."
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold pl-2">Açıklama</h1>
            <div className=" p-2 flex flex-col gap-2 border border-gray-400 rounded-lg focus-within:border-teal-700">
              <p className="pl-2">
                Sorununuzu aşağıda sizin için ayırılan alanda lütfen açık bir
                şekilde tanımlayın.
              </p>
              <textarea
                className="w-full min-h-48 p-2 outline-none"
                placeholder="Sorununuzu burada belirtin."
              ></textarea>
            </div>
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
