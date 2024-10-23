export default function NotFoundPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl text-red-500 font-semibold">
        {" "}
        404 - Sayfa Görüntülenemiyor
      </h1>
      <h1 className="font-semibold">
        Lütfen ziyaret ettiğiniz adresi kontrol edin.
      </h1>
    </div>
  );
}
