import Donasi from "./pages/Donasi"
import Beranda from "./pages/Beranda"
import Profil from "./pages/Profil"
import Kontak from "./pages/Kontak"

import { HashRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<Beranda />}/>
        <Route path="profil" element={<Profil />}/>
        <Route path="kontak" element={<Kontak />}/>
        <Route path="donasi" element={<Donasi />}/>
      </Routes>
    </HashRouter>
  )
}

export default App