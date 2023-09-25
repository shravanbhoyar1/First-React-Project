import "./home.css";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";

export default function Home()
{
    return (
        <div className="container">
         <Navbar/>  
         <h1>Home</h1>
         <Footer/>
        </div>
    );
}