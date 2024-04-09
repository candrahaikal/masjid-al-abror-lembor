// import React from 'react'
import Navbar from '../components/Navbar'
import TextDescription from '../components/TextDescription'
import TextTitle from '../components/TextTitle'
import Table from '../components/Table'
import Footer from '../components/Footer'

const Profil = () => {
  return (
    <>
      <Navbar />

      <TextTitle title={"Profil Masjid Al-Abror"} />

      <TextDescription description={"Masjid Baitul Fikri Untag Surabaya diresmikan penggunaannya pada tanggal 11 Februari 1994 oleh Bapak H. Probosutedjo. Masjid berarsitektur Jawa dan berlantai marmer ini dibangun dua lantai, lantai satu untuk jamaah pria, dan lantai dua untuk jamaah wanita dengan daya tampung 750 jamaah. Selain sebagai tempat ibadah rutin, juga sebagai pusat kegiatan keislaman dan sekaligus tempat membentuk pribadi intelektual yang jernih para mahasiswa dan masyarakat umum sekitar kampus."}/>

      <br />
      <TextDescription description={"Berikut ini adalah daftar pengurus Masjid Baitul Fikri Untag Surabaya:"}/>

      <Table />
      <Footer />
    </>
  )
}

export default Profil