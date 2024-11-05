"use client";
export default function Footer(){
    return(
        <div className="section">
        <div className="footer">
        <div className="footer-top">
        <div className="logo">
        <h1>A.</h1>
        <p>Aiman Wajid</p>
        </div>
        <div className="footer-action">
        <input type="email" placeholder="Enter your email"/>
        <button className="">Connect with me</button>
        </div>
        </div>
         <div className="line"></div>
         <div className="footer-bottom">
        <p>&copy; 2024 Aiman Wajid. All right reserved.</p>
        <div className="legal-itens">
        <p>Terms of services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
        </div>
         </div>
         </div>
         </div>
    );
}