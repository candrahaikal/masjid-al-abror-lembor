// import React from 'react'
import strukturPengurus from "../data/struktur-pengurus.json";

const Table = () => {
  return (
    <>
    <div className="w-full my-10">
      <div className="table-container max-w-[1240px] mx-auto px-6">
        <table className="w-full lg:w-3/4 font-manrope border-collapse border border-slate-400">
          <thead>
            <tr className="border border-slate-400">
              <th className="py-2 px-2 md:px-6 border-l border-slate-400">No</th>
              <th className="py-2 px-2 md:px-6 border-l border-slate-400">Nama</th>
              <th className="py-2 px-2 md:px-6 border-l border-slate-400">Jabatan</th>
            </tr>
          </thead>

          {strukturPengurus.map((anggota) => {
            return (
              <tr key={anggota.id} className="even:bg-slate-200">
                <td className="py-2 px-2 md:px-6 border-l border-slate-400 text-center">{anggota.id}</td>
                <td className="py-2 px-2 md:px-6 border-l border-slate-400">{anggota.nama}</td>
                <td className="py-2 px-2 md:px-6 border-l border-slate-400">{anggota.jabatan}</td>
              </tr>
            );
          })}

          <tbody></tbody>
        </table>


      </div>
    </div>
    </>
  );
};

export default Table;
