import { } from 'react'
import HeaderHome from './1.Header'
import Slide from './2.Slide'
import MaMauSon from './3.GioiThieuCty'
import PhoiMauNhaDep from './4.SanPham'
import MauSacPhongThuy from './5.DichVuKyThuat'
import SanPham from './6.DoiTacToanCau'
import XuHuongMauSac from './7.TinTucSuKien'
import Footer from './9.Footer'
import './style.scss'
type Props = {}

const HomePage = ({}: Props) => {
  return (
    <div className="text-base overflow-x-hidden">
      <HeaderHome />
      <Slide />
      <MaMauSon/>
      <PhoiMauNhaDep/>
      <MauSacPhongThuy/>
      <SanPham/>
      <XuHuongMauSac/>
      {/* <HoTro/> */}
      <Footer/>
    </div>
  );
}

export default HomePage
