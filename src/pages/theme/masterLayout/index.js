import { memo } from "react"
import Header from "../header"
import Footer from "../footer"
import HomePage from "../../homePage"

const MasterLayout = ()=>{
    return (
    <>
        <Header />
        <HomePage/>
        <Footer/>
    </>
    )
    
}
export default memo(MasterLayout)