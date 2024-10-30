export default function Footer() {
  return (
    <div className="min-h-[300px] bg-teal-700 text-gray-200 flex flex-col gap-4 items-center p-4">
      <h1 className="text-sm">
        {" "}
        Bu proje 2024-2025 Güz Dönemi grup web projesidir. Bayram Telli & Yeşim
        Yavuz tarafından birlikte geliştirilmiştir.
      </h1>
      <div className="w-3/4 grid grid-cols-4 text-sm">
        <div className=" p-4 flex flex-col gap-3">
          <h1 className="font-semibold">Company</h1>
          <hr />
          <ul>
            <li>About Us</li>
            <li>Sustainability</li>
            <li>Human Resource</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className=" p-4 flex flex-col gap-3">
          <h1 className="font-semibold">Services</h1>
          <hr />
          <ul>
            <li>Advertisement</li>
            <li>Coopeartion</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div className=" p-4 flex flex-col gap-3">
          <h1 className="font-semibold">Stores</h1>
          <hr />
          <ul>
            <li>Find location</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className=" p-4 flex flex-col gap-3">
          <h1 className="font-semibold">Follow Us</h1>
          <hr />
          <ul>
            <li>Youtube</li>
            <li>Linkedin</li>
            <li>Website</li>
            <li>Platform X</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
