

import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { IsLoginWrap } from './components/pages/Login/Login.redirect'
import Home from "./components/pages/Home/Home.view";
import Gallery from "./components/pages/Gallery/Gallery.view";
import Peminjaman from "./components/pages/Peminjaman/Peminjaman.view"
import Login from "./components/pages/Login/Login.pages";
import Daftar from "./components/pages/Daftar/Daftar.view";
import SyaratPeminjaman from "./components/pages/SyaratPeminjaman/SyaratPeminjaman.view";
import Profile from "./components/pages/Profile/Profile.view";
import ProfileSetting from "./components/pages/ProfileSetting/ProfileSetting.view";
import PangkalanLogin from "./components/pages/PangkalanLogin/PangkalanLogin.view";
import InsideProfile from "./components/pages/AddSetoran/AddSetoran";
import ListSetoran from './components/pages/Setoran/list-setoran.page'
import FormSetoranPage from './components/pages/Setoran/add-setoran.page'
import SyaratPangkalanLogin from "./components/pages/SyaratPeminjamanLogin/SyaratPeminjamanLogin";
import TentangKami from "./components/pages/TentangKami/TentangKami.view";
import TentangKamiLogin from "./components/pages/TentangKamiLogin/TentangKamiLogin.view";
import AddSetoranPokok from "./components/pages/AddSetoranPokok/AddSetoranPokok"
import { AuthProvider } from "contexts/auth.context";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route caseSensitive path="/" element={<Home />} />
          
          <Route caseSensitive path="/gallery" element={<Gallery />} />
          <Route caseSensitive path="/gallery-login" element={<Gallery />} />

          <Route caseSensitive path="/pangkalan" element={<Peminjaman />} />
          <Route caseSensitive path="/setoran" element={
            <IsLoginWrap>
              <ListSetoran />
            </IsLoginWrap>
          } />
          <Route caseSensitive path="/setoran/add" element={<FormSetoranPage />} />

          {/* <Route caseSensitive path='/add-gallery' element={<AddGalery />} /> */}

          <Route caseSensitive path='/login' element={<Login />} />
          <Route caseSensitive path='/daftar' element={<Daftar />} />
          <Route caseSensitive path='/SyaratPangkalan' element={<SyaratPeminjaman />} />
          <Route caseSensitive path='/profile' element={<Profile />} />
          <Route caseSensitive path='/profile-setting' element={<ProfileSetting />} />

          <Route caseSensitive path='/SyaratPangkalan-login' element={<SyaratPangkalanLogin />} />
          <Route caseSensitive path='/pangkalan-login' element={<PangkalanLogin />} />
          <Route caseSensitive path='/add-setoran' element={<InsideProfile />} />
          <Route caseSensitive path='/add-setoranpokok' element={<AddSetoranPokok />} />
          <Route caseSensitive path='/tentang-kami' element={<TentangKami />} />
          <Route caseSensitive path='/tentang-kami-login' element={<TentangKamiLogin />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
