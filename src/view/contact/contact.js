import "./contact.css";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
export default function Contact()
{
    return (
        <div className="contact-container">
         <Navbar/>   
         <h1>Contact</h1>
         <Footer/>
        </div>
    );
}