import { } from 'react'
import HeaderHome from '../HomePage/1.Header'
import Slide from '../HomePage2/__Slide'
import GioiThieu from './__GioiThieu'
import SanPham from './___SanPham'
import './index.scss'
import DichVuKyThuat from './___DichVuKyThuat'
import DoiTacToanCau from './____DoiTacToanCau'
import TinTucSuKien from './_____TinTucSuKien'
import ChungNhan from './_____ChungNhan'
import Footer from './_____Footer'
type Props = {}

const index = ({}: Props) => {
  return (
    <div>
      <HeaderHome/>
        <Slide/>
        {/* <Header/> */}
        <GioiThieu/>
        <SanPham/>
        <DichVuKyThuat/>
        <DoiTacToanCau/>
        <TinTucSuKien/>
        <ChungNhan/>
        <Footer/>
    </div>
  )
}

export default index
