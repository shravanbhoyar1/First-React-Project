import "./about.css";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";


export default function About()
{
    return (
        <div className="about-container">
         <Navbar/>
         <h1>About</h1>
         <Footer/>
        </div>
    );
}