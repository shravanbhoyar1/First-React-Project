import "./home.css";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import ImgBack from './back.jpeg'
export default function Home()
{
    return (
        <div className="container">
         <Navbar/>  
         <img src={ ImgBack } className="back-img"/>
         <Footer/>
        </div>
    );
}