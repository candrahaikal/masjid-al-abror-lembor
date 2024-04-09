import { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [navShow, setNavShow] = useState(false);

  const handlenavShow = () => {
    setNavShow(!navShow);
  };

  return (
    <>
      <div
        id="navbar"
        className=" bg-white shadow-md sticky left-0 top-0 w-full z-50"
      >
        <div
          id="navbar-container"
          className="w-full max-w-[1240px] flex justify-between items-center mx-auto sm:px-0 md:py-0 md:px-6 px-6 py-2"
        >
          <div id="navbar-logo" className="text-indigo-950 cursor-pointer">
            <h1 className="text-3xl font-philosopher font-bold">
              Masjid Al-Abror
            </h1>
            <p className="font-manrope text-[12px]">
              Pimpinan Ranting Muhammadiyah Lembor
            </p>
          </div>
          <ul
            id="navbar-links"
            className="md:flex justify-between items-center hidden font-manrope "
          >
            <Link to={"/"} className="no-underline">
              <li className="py-7 px-10 border-slate-300 font-semibold text-md text-red-800 hover:bg-red-800 hover:text-white cursor-pointer">
                Beranda
              </li>
            </Link>
            <Link to={"/profil"} className="no-underline">
              <li className="py-7 px-10 border-slate-300 font-semibold text-md text-red-800 hover:bg-red-800 hover:text-white cursor-pointer">
                Profil
              </li>
            </Link>
            <Link to={"/kontak"} className="no-underline">
              <li className="py-7 px-10 border-slate-300 font-semibold text-md text-red-800 hover:bg-red-800 hover:text-white cursor-pointer">
                Kontak
              </li>
            </Link>
          </ul>
          <div id="navbar-cta">
            <button className="rounded-md bg-red-800 py-2 w-[150px] text-md font-bold text-white lg:block hidden font-manrope">
              <Link to={"/donasi"}>Donasi</Link>
            </button>
          </div>
          {!navShow ? (
            <IoMdMenu
              size={30}
              className="block md:hidden"
              onClick={handlenavShow}
            />
          ) : (
            <CgCloseR
              size={30}
              className="block lg:hidden ease-out duration-200"
              onClick={handlenavShow}
            />
          )}
        </div>
      </div>

      <div
        className={
          navShow
            ? "fixed left-0 top-0 bg-white w-full py-4 px-6 shadow-md ease-in-out duration-300"
            : "fixed top-[-100%]"
        }
      >
        <div id="navbar-upper" className="flex justify-between items-center">
          <div id="navbar-logo">
            <h1 className="text-3xl font-philosopher font-bold">
              Masjid Al-Abror
            </h1>
            <p className="font-manrope text-[12px]">
              Pimpinan Ranting Muhammadiyah Lembor
            </p>
          </div>
          <CgCloseR onClick={handlenavShow} size={30} />
        </div>
        <ul id="navbar-links" className="flex flex-col my-5">
          <Link to={"/"}>
            <li className="py-3 border-b border-slate-300 font-semibold text-md text-red-800 font-manrope">
              Beranda
            </li>
          </Link>
          <Link to={"/profil"}>
            <li className="py-3 border-b border-slate-300 font-semibold text-md text-red-800 font-manrope">
              Profil
            </li>
          </Link>
          <Link to={"/kontak"}>
            <li className="py-3 border-b border-slate-300 font-semibold text-md text-red-800 font-manrope">
              Kontak
            </li>
          </Link>
        </ul>
        <div id="navbar-cta" className="me-auto">
          <Link to={"/donasi"}>
            <button className="rounded-md bg-red-800 py-2 px-12 font-manrope text-sm text-md font-bold text-white">
              Donasi
            </button>
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
