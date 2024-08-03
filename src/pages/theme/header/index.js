import { memo } from "react"
import "./style.scss"
import { AiOutlineDown } from "react-icons/ai"
import { HiBars3 } from "react-icons/hi2"
import { TfiShoppingCart } from "react-icons/tfi"
import { RiArrowDropRightLine } from "react-icons/ri"


const Header = () => {
    return (
        <header>
            <div class="logo">
                <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"></img>
            </div>
            <div class="nav">
                <div class="menu">
                    <ul>
                        <li>
                            <a href="#">Home<AiOutlineDown /></a>
                            <ul>
                                <li><a href="#">Home 1</a></li>
                                <li><a href="#">Home 2</a></li>
                                <li><a href="#">Home 3</a></li>
                                <li><a href="#">Home 4</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Tour<AiOutlineDown /></a>
                            <ul>
                                <li>
                                    <a href="#">Tour Classic Fullwidth<RiArrowDropRightLine/></a>
                                    <ul>
                                        <li><a href="#">2 Columns</a></li>
                                        <li><a href="#">3 Columns</a></li>
                                        <li><a href="#">4 Columns</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Tour Classis Sidebar<RiArrowDropRightLine/></a>
                                    <ul>
                                        <li><a href="#">Right Sidebar</a></li>
                                        <li><a href="#">Left Sidebar</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Tour Grid Fullwidth<RiArrowDropRightLine/></a>
                                    <ul>
                                        <li><a href="#">2 Columns</a></li>
                                        <li><a href="#">3 Columns</a></li>
                                        <li><a href="#">4 Columns</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Tour Grid Sidebar<RiArrowDropRightLine/></a>
                                    <ul>
                                        <li><a href="#">Right Sidebar</a></li>
                                        <li><a href="#">Left Sidebar</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Tour List Sidebar<RiArrowDropRightLine/></a>
                                    <ul>
                                        <li><a href="#">Right Sidebar</a></li>
                                        <li><a href="#">Left Sidebar</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Tour Header Type<RiArrowDropRightLine/></a>
                                    <ul>
                                        <li><a href="#">Featured Image</a></li>
                                        <li><a href="#">Video</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Tour Categories<RiArrowDropRightLine/></a>
                                    <ul>
                                        <li><a href="#">Rural</a></li>
                                        <li><a href="#">Snow & Ice</a></li>
                                        <li><a href="#">Wildlife</a></li>
                                        <li><a href="#">Mountain</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Booking<AiOutlineDown /></a>
                            <ul>
                                <li>
                                    <a href="#">Online Payment for Booking<RiArrowDropRightLine/></a>
                                    <ul>
                                        <li><a href="#">Variable Tour Pricing</a></li>
                                        <li><a href="#">Simple Tour Pricing</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Custom Booking Form<RiArrowDropRightLine/></a>
                                    <ul>
                                        <li><a href="#">Booking Form + Sub Tour Data</a></li>
                                        <li><a href="#">Booking Form + Custom Date</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Tour Durations<RiArrowDropRightLine/></a>
                                    <ul>
                                        <li><a href="#">Single Day Tour</a></li>
                                        <li><a href="#">Multiple Days Tour</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Custom Booking URL for Affiliate Tour</a></li>
                                <li><a href="#">Custom Booking using custom HTML&Shortcode</a></li>
                                <li>
                                    <a href="#">Header Options<RiArrowDropRightLine/></a>
                                    <ul>
                                        <li><a href="#">Standard Background Header</a></li>
                                        <li><a href="#">Video Background Header</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Layout Options<RiArrowDropRightLine/></a>
                                    <ul>
                                        <li><a href="#">With Sidebar</a></li>
                                        <li><a href="#">Fullwidth</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Destinations<AiOutlineDown /></a>
                            <ul>
                                <li><a href="#">Destination Fullwidth</a></li>
                                <li><a href="#">Destination + Video Header</a></li>
                                <li><a href="#">Destination Right Sidebar</a></li>
                                <li><a href="#">Destination Left Sidebar</a></li>
                                <li><a href="#">Single Destination</a></li>
                                <li><a href="#">Single Destination + Video</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Pages<AiOutlineDown /></a>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">Page Fullwidth</a></li>
                                <li><a href="#">Page + Video Background Header</a></li>
                                <li><a href="#">Page Right Sidebar</a></li>
                                <li><a href="#">Page Left Sidebar</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Blog<AiOutlineDown /></a>
                            <ul>
                                <li><a href="#">Blog Right Sidebar</a></li>
                                <li><a href="#">Blog Left Sidebar</a></li>
                                <li><a href="#">Blog Fullwidth</a></li>
                                <li><a href="#">Blog Grid Right Sidebar</a></li>
                                <li><a href="#">Blog Grid Left Sidebar</a></li>
                                <li><a href="#">Blog Grid Fullwidth</a></li>
                                <li><a href="#">Blog Full + Grid Right Sidebar</a></li>
                                <li><a href="#">Blog Full + Grid Left Sidebar</a></li>
                                <li><a href="#">Blog Full + Grid Fullwidth</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Shortcodes<AiOutlineDown /></a>
                            <ul>
                                <li><a href="#">Accordion & Toggles</a></li>
                                <li><a href="#">Alert Boxes</a></li>
                                <li><a href="#">Animated Content</a></li>
                                <li><a href="#">Buttons & Social Icons</a></li>
                                <li><a href="#">Columns</a></li>
                                <li><a href="#">Google Maps</a></li>
                                <li><a href="#">Image Frame & Animation</a></li>
                                <li><a href="#">Image Teasers</a></li>
                                <li><a href="#">Pricing Tables</a></li>
                                <li><a href="#">Tabs</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Shop<AiOutlineDown /></a>
                            <ul>
                                <li><a href="#">Shop Fullwidth</a></li>
                                <li><a href="#">Shop Sidebar</a></li>
                                <li><a href="#">Single Product Fullwidth</a></li>
                                <li><a href="#">Single Product With Sidebar</a></li>
                            </ul>
                        </li>
                        <li class="toggle_btn">
                            <HiBars3 style={{ fontSize: '25px' }} />
                            <TfiShoppingCart style={{ fontSize: '25px' }} />
                        </li>
                    </ul>
                </div>
                <div class="toggle_btn1">
                    <HiBars3 style={{ fontSize: '25px' }} />
                </div>
            </div>

        </header>
    )
}
export default memo(Header)