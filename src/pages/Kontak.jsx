// import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TextTitle from '../components/TextTitle'
import TextDescription from '../components/TextDescription'
import Contact from '../components/Contact'

const Kontak = () => {
  return (
    <div>
      <Navbar />
      <TextTitle title={"Daftar Kontak"} />

      <div id="address" className="mb-7">
        <b><TextDescription description={"Komplek Masjid Al-Abror"} /></b>
        <TextDescription description={`Jalan Poros Utama Desa Lembor, Kecamatan Brondong, Kabupaten Lamongan`}/>
      </div>

      <Contact />

      <Footer />
    </div>
  )
}

export default Kontak