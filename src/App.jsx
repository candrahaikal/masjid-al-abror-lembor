import Beranda from "./pages/Beranda"
import Profil from "./pages/Profil"
import Kontak from "./pages/Kontak"
import Donasi from "./pages/Donasi"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path={"/"} element={<Beranda />}/>
        <Route path="profil" element={<Profil />}/>
        <Route path="kontak" element={<Kontak />}/>
        <Route path="donasi" element={<Donasi />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App