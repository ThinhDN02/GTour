import { memo } from "react"
import "./style.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { GiSmartphone } from "react-icons/gi"
import { BiSolidMap } from "react-icons/bi"
import { GiAlarmClock } from "react-icons/gi"
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { TiSocialYoutubeCircular } from "react-icons/ti"
import { BsPinterest } from "react-icons/bs"
import { FaSquareInstagram } from "react-icons/fa6"

const Footer = () => {
    return (
        <div class="colorF">
            <div class="container">
                <div class="row" id="vo">
                    <div class="col-lg-4 col-sm-12">
                        <h2>Contact Info</h2>
                        <p>London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"></img>
                    </div>
                    <div class="col-lg-4 col-sm-12">
                        <h2>Contact Info</h2>
                        <p><GiSmartphone />1-567-124-44227</p>
                        <p><BiSolidMap />184 Main Street East Perl Habour 8007</p>
                        <p><GiAlarmClock />Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
                        <div class="row">
                            <div class="col-2">
                                <a href="#" class="fb"><BsFacebook size={50} /></a>
                            </div>
                            <div class="col-2">
                                <a href="#" class="tw"><AiFillTwitterCircle size={50} /></a>
                            </div>
                            <div class="col-2">
                                <a href="#" class="yt"><TiSocialYoutubeCircular size={50} /></a>
                            </div>
                            <div class="col-2">
                                <a href="#" class="pr"><BsPinterest size={50} /></a>
                            </div>
                            <div class="col-2">
                                <a href="#" class="in"><FaSquareInstagram size={50} /></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-12">
                        <h2>Recent Trips</h2>
                        <table>
                            <tr>
                                <td><img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"/></td>
                                <td><img src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"/></td>
                                <td><img src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"/></td>
                            </tr>
                            <tr>
                                <td><img src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"/></td>
                                <td><img src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"/></td>
                                <td><img src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"/></td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default memo(Footer)