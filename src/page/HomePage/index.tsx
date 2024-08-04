import {} from 'react'
import HeaderHome from './1.Header'
import './style.scss'
import Slide from './2.Slide'
import MaMauSon from './3.MaMauSon'
import PhoiMauNhaDep from './4.PhoiMauNhaDep'
import MauSacPhongThuy from './5.MauSacPhongThuy'
import SanPham from './6.SanPham'
import XuHuongMauSac from './7.XuHuongMauSac'
import HoTro from './8.HoTro'
import Footer from './9.Footer'
type Props = {}

const HomePage = ({}: Props) => {
  return (
    <div className="text-base">
      <HeaderHome />
      <Slide />
      <MaMauSon/>
      <PhoiMauNhaDep/>
      <MauSacPhongThuy/>
      <SanPham/>
      <XuHuongMauSac/>
      <HoTro/>
      <Footer/>
    </div>
  );
}

export default HomePage
