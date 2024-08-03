import { memo } from "react"
import "./style.scss"
import 'semantic-ui-css/semantic.min.css'
import { Input } from 'semantic-ui-react'
import { AiFillStar } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { AiOutlineClockCircle } from "react-icons/ai"
import "bootstrap/dist/css/bootstrap.min.css"
import { RiArrowDropRightLine } from "react-icons/ri"
//import "bootstrap/dist/js/bootstrap.bundle.min";

function HomePage() {
    return (
        <div class="container">
            <div class="pan">
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/JPe2mwq96cw?&autoplay=1&mute=1&controls=0&playlist=JPe2mwq96cw&loop=1"></iframe>
                </div>
                <div id="text">
                    <h1 class="ppb_title">Where do you want to go?</h1>
                    <p class="page_tagline">Trips, experiences, and places. All in one service.</p>
                    <div class="textinput">
                        <div class="textct">
                            <Input icon='search' placeholder='Destination, city' />
                        </div>
                        <div class="textct">
                            <select id="month" name="month" class="ssize">
                                <option value="">Any Month</option><option value="january">January</option><option value="february">February</option><option value="march">March</option><option value="april">April</option><option value="may">May</option><option value="june">June</option><option value="july">July</option><option value="august">August</option><option value="september">September</option><option value="october">October</option><option value="november">November</option><option value="december">December</option>
                            </select>
                            <span class="ti-calendar"></span>
                        </div>
                        <div class="textct">
                            <select id="sort_by" name="sort_by" class="ssize">
                                <option value="date">Sort By Date</option><option value="price_low">Price Low to High</option><option value="price_high">Price High to Low</option><option value="name">Sort By Name</option><option value="popular">Sort By Popularity</option><option value="review">Sort By Review Score</option></select>
                            <span class="ti-exchange-vertical"></span>
                        </div>
                        <div class="textct">
                            <button type="button" class="btn btn-danger">Search</button>
                        </div>
                    </div>
                    <div class="textinput1">
                        <div>
                            <Input icon='search' placeholder='Destination, city' />
                        </div>
                        <div>
                            <select id="month" name="month" class="ssize">
                                <option value="">Any Month</option><option value="january">January</option><option value="february">February</option><option value="march">March</option><option value="april">April</option><option value="may">May</option><option value="june">June</option><option value="july">July</option><option value="august">August</option><option value="september">September</option><option value="october">October</option><option value="november">November</option><option value="december">December</option>
                            </select>
                            <span class="ti-calendar"></span>
                        </div>
                        <div >
                            <select id="sort_by" name="sort_by" class="ssize">
                                <option value="date">Sort By Date</option><option value="price_low">Price Low to High</option><option value="price_high">Price High to Low</option><option value="name">Sort By Name</option><option value="popular">Sort By Popularity</option><option value="review">Sort By Review Score</option></select>
                            <span class="ti-exchange-vertical"></span>
                        </div>
                        <div >
                            <button type="button" class="btn btn-danger">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div id="title">
                    <h1>Popular Destinations</h1>
                </div>
            </div>
            <div class="row">
                <div id="label">
                    <h5>World's best tourist destinations</h5>
                </div>
            </div>
            <div class="row" id="vo">
                <div class="col-lg-3 col-sm-12">
                    <div class="card">
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg"></img>
                        <h2><b>Tokyo</b></h2>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                    <div class="card">
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg"></img>
                        <h2><b>Seoul</b></h2>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                    <div class="card">
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg"></img>
                        <h2><b>Paris</b></h2>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                    <div class="card">
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg"></img>
                        <h2><b>London</b></h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div id="title">
                    <h1>Best Value Trips</h1>
                </div>
            </div>
            <div class="row">
                <div id="label">
                    <h5>Best offers trips from us</h5>
                </div>
            </div>
            <div class="row" id="vo">
                <div class="col-lg-4 col-sm-12">
                    <div class="card">
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg" />
                        <div class="container">
                            <div class="row">
                                <h4>French Autumn</h4>
                            </div>
                            <div class="row">
                                <p>Architect & Engineer</p>
                            </div>
                            <div class="row">
                                <div class="dg">
                                    <div class="left">
                                        <div class="start">
                                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
                                        </div>
                                        <p>4 reviews</p>
                                    </div>
                                    <div class="right">
                                        <div class="day">
                                            <AiOutlineClockCircle />
                                        </div>
                                        <p>5 day</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div class="card">
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg" />
                        <div class="container">
                            <div class="row">
                                <h4>Grand Switzerland</h4>
                            </div>
                            <div class="row">
                                <p>Architect & Engineer</p>
                            </div>
                            <div class="row">
                                <div class="dg">
                                    <div class="left">
                                        <div class="start">
                                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
                                        </div>
                                        <p>4 reviews</p>
                                    </div>
                                    <div class="right">
                                        <div class="day">
                                            <AiOutlineClockCircle />
                                        </div>
                                        <p>5 day</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div class="card">
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg" />
                        <div class="container">
                            <div class="row">
                                <h4>Discover Japan</h4>
                            </div>
                            <div class="row">
                                <p>Architect & Engineer</p>
                            </div>
                            <div class="row">
                                <div class="dg">
                                    <div class="left">
                                        <div class="start">
                                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
                                        </div>
                                        <p>4 reviews</p>
                                    </div>
                                    <div class="right">
                                        <div class="day">
                                            <AiOutlineClockCircle />
                                        </div>
                                        <p>5 day</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div id="title">
                    <h1>Why Choose Us</h1>
                </div>
            </div>
            <div class="row">
                <div id="label">
                    <h5>Here are reasons you should plan trip with us</h5>
                </div>
            </div>
            <div class="row" id="vo">
                <div class="col-lg-4 col-sm-12">
                    <div class="cardchose">
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png" />
                        <div class="container">
                            <div class="row">
                                <h4><b>Handpicked Hotels</b></h4>
                            </div>
                            <div class="row">
                                <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div class="cardchose">
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png" />
                        <div class="container">
                            <div class="row">
                                <h4><b>World Class Service</b></h4>
                            </div>
                            <div class="row">
                                <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div class="cardchose">
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png" />
                        <div class="container">
                            <div class="row">
                                <h4><b>Best Price Guarantee</b></h4>
                            </div>
                            <div class="row">
                                <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <img class="image" src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg" />
            </div>
            <div class="row">
                <div id="title">
                    <h1>Articles & Tips</h1>
                </div>
            </div>
            <div class="row">
                <div id="label">
                    <h5>Explore some of the best tips from around the world</h5>
                </div>
            </div>
            <div class="row" id="vo">
            <div class="col-lg-4 col-sm-12">
                    <div class="card">
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg" />
                        <div class="container">
                            <div class="row cardst">
                                <h6>DECEMBER 10, 2016</h6>
                            </div>
                            <div class="row cardst" >
                                <h4><b>Memorial Day to Someone Told Me to Travel</b></h4>
                            </div>
                            <div class="row cardst">
                                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
                            </div>
                            <div class="row read">
                                <a href="#">Read More<RiArrowDropRightLine/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div class="card">
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg" />
                        <div class="container">
                            <div class="row cardst">
                                <h6>DECEMBER 10, 2016</h6>
                            </div>
                            <div class="row cardst" >
                                <h4><b>7 Tips For Nomads On A Budget Trips</b></h4>
                            </div>
                            <div class="row cardst">
                                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
                            </div>
                            <div class="row read">
                                <a href="#">Read More<RiArrowDropRightLine/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div class="card">
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg" />
                        <div class="container">
                            <div class="row cardst">
                                <h6>DECEMBER 10, 2016</h6>
                            </div>
                            <div class="row cardst" >
                                <h4><b>Taking A Travel Blog Victory Lap</b></h4>
                            </div>
                            <div class="row cardst">
                                <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
                            </div>
                            <div class="row read">
                                <a href="#">Read More<RiArrowDropRightLine/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(HomePage)