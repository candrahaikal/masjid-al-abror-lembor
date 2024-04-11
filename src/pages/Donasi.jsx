// import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextTitle from "../components/TextTitle";
import InputForm from "../components/InputForm";

const Donasi = () => {
  return (
    <div className="w-full w-max-[1240px] font-manrope mx-auto">
      <div className="donasi-container">
        <Navbar />

        <TextTitle title={"Informasi Donasi"} />

        <div
          id="donation-content"
          className="flex flex-col md:flex-row justify-between items-start w-full max-w-[1240px] mx-auto"
        >
          <div id="donation-info" className="w-full lg:w-1/2">
            <h1 className=" max-w-[1240px] mx-auto px-6 text-justify">
              Untuk melakukan donasi atau memberikan infak maupun sodaqoh
              melalui{" "}
              <span className="font-bold">
                Masjid Baitul Fikri Untag Surabaya,{" "}
              </span>{" "}
              dapat dengan transfer ke rekening berikut:
            </h1>

            <ul className="w-full max-w-[1240px] mx-auto px-6 my-7">
              <li>
                <h1 className="font-manrope text-base md:text-lg">
                  Rekening BNI: <span className="font-bold">0221.333.912</span>{" "}
                  (a/n Masjid Al-Abror Lembor)
                </h1>
              </li>

              <li>
                <h1 className="font-manrope text-base md:text-lg">
                  Rekening Mandiri:{" "}
                  <span className="font-bold">37.222.666.432-1</span> (a/n
                  Masjid Al-Abror Lembor)
                </h1>
              </li>
            </ul>
          </div>
          <div id="donation-form" className="w-full max-w-[1240px] mx-auto px-6 lg:w-2/5">
            <h1 className="mb-5">
              Serta melakukan konfirmasi transfer dengan mengupload bukti
              transfer melalui Form Donasi Online dibawah ini:
            </h1>

            <form action="">
              <InputForm label={"Nama"} name={"nama"} type={"text"} />
              <InputForm
                label={"Kontak HP / Whatsapp"}
                name={"number"}
                type={"text"}
              />
              <InputForm label={"Email"} name={"email"} type={"email"} />
              <InputForm label={"Bukti Transfer"} name={"file"} type={"file"} />
              <InputForm label={"Catatan"} name={"note"} type={"textarea"} />

              <button type="submit" className="rounded-md bg-red-800 py-3 w-full `md:w-4/5 mb-6 font-manrope me-auto text-sm text-md font-bold text-white">
            Kirim
          </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Donasi;
