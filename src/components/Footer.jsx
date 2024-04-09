// import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-red-800">
      <div id="footer-container" className="w-full max-w-[1240px] mx-auto px-6 py-6 text-white">
        <div id="footer-info" className="flex flex-col gap-10 md:flex-row justify-between items-start mb-12 ">
          <div id="brand-footer">
            <div id="navbar-logo" className="">
              <h1 className="text-xl md:text-3xl font-philosopher font-bold">
                Masjid Al-Abror
              </h1>
              <p className="font-manrope text-[8px] md:text-[12px]">
                Pimpinan Ranting Muhammadiyah Lembor
              </p>
            </div>
          </div>
          <div id="address-footer" className="w-full md:w-2/5 font-manrope flex flex-col gap-2 md:gap-7 ">
            <h1 className="font-bold text-lg md:text-xl">Alamat</h1>
            <p className="text-sm md:text-md">
              Jl. Manyar Rejo, Menur Pumpungan, Kecamatan Sukolilo, Kota
              Surabaya, Jawa Timur 60118
            </p>
            <p className="text-sm md:text-md">(031) 5915420</p>
          </div>
          <div id="footer-cta" className="w-full sm:w-auto">
            <button className=" rounded-md bg-white py-2 w-[150px] font-manrope text-md text-md font-bold text-red-800">
              Donasi
            </button>
          </div>
        </div>

        <div id="footer-copyright">
          <hr className="block w-full bg-slate-600 "/>
          <p className="font-manrope text-center my-4 text-[7px] md:text-xs">Copyright 2024 @ Candra Haikal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
