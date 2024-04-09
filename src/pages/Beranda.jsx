import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TextTitle from "../components/TextTitle";
import Card from "../components/Card";
import TextDescription from "../components/TextDescription";
import YoutubePlayer from "../components/YoutubePlayer";
import Footer from "../components/Footer";
import testImage from "../assets/hero-bg.jpg";

const Beranda = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <TextTitle title={"Profil Singkat"} />
      <TextDescription
        description={
          "Masjid Baitul Fikri Untag Surabaya diresmikan penggunaannya pada tanggal 11 Februari 1994 oleh Bapak H. Probosutedjo. Masjid berarsitektur Jawa dan berlantai marmer ini dibangun dua lantai, lantai satu untuk jamaah pria, dan lantai dua untuk jamaah wanita dengan daya tampung 750 jamaah. Selain sebagai tempat ibadah rutin, juga sebagai pusat kegiatan keislaman dan sekaligus tempat membentuk pribadi intelektual yang jernih para mahasiswa dan masyarakat umum sekitar kampus."
        }
      />

      <TextTitle title={"Kegiatan"} />
      <div className="px-6 max-w-[1240px] flex mx-auto justify-center items-center md:gap-8 gap-4 lg:gap-10 flex-wrap mb-10">
        <Card
          image={testImage}
          date={"12 April 2023"}
          title={"Tausiah dan Buka Bersama Ust. Abdul Somad"}
        />
        <Card
          image={testImage}
          date={"12 April 2023"}
          title={"Tausiah dan Buka Bersama Ust. Abdul Somad"}
        />
        <Card
          image={testImage}
          date={"12 April 2023"}
          title={"Tausiah dan Buka Bersama Ust. Abdul Somad"}
        />
        <Card
          image={testImage}
          date={"12 April 2023"}
          title={"Tausiah dan Buka Bersama Ust. Abdul Somad"}
        />
        <Card
          image={testImage}
          date={"12 April 2023"}
          title={"Tausiah dan Buka Bersama Ust. Abdul Somad"}
        />
      </div>

      <TextTitle title={"Video Masjid Baitul Fikri"} />
      <YoutubePlayer />

      <Footer />

    </>
  );
};

export default Beranda;
