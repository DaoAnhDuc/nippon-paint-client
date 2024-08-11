import { } from 'react'
import HeaderHome from './1.Header'
import Slide from './2.Slide'
import GioiThieuCty from './3.GioiThieuCty'
import SanPham from './4.SanPham'
import DichVuKyThuat from './5.DichVuKyThuat'
import DoiTacToanCau from './6.DoiTacToanCau'
import TinTucSuKien from './7.TinTucSuKien'
import Footer from './9.Footer'
import './style.scss'
import ChungNhan from './8.Chungnhan'
type Props = {}

const HomePage = ({}: Props) => {
  return (
    <div className="text-base overflow-x-hidden">
      <HeaderHome />
      <Slide />
      <GioiThieuCty />
      <SanPham />
      <DichVuKyThuat />
      <DoiTacToanCau />
      <TinTucSuKien />
      <ChungNhan/>
      <Footer />
    </div>
  );
}

export default HomePage
